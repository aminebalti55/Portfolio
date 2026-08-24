"""Measure the generated Fallen Throne button sheet for CSS label placement."""

from __future__ import annotations

import argparse
from dataclasses import dataclass
from pathlib import Path

from PIL import Image


@dataclass(frozen=True)
class SlotMeasurement:
    name: str
    slot_top: int
    slot_bottom: int
    alpha_bbox: tuple[int, int, int, int]

    @property
    def slot_height(self) -> int:
        return self.slot_bottom - self.slot_top

    @property
    def painted_width(self) -> int:
        return self.alpha_bbox[2] - self.alpha_bbox[0]

    @property
    def painted_height(self) -> int:
        return self.alpha_bbox[3] - self.alpha_bbox[1]

    @property
    def painted_center_y(self) -> float:
        return (self.alpha_bbox[1] + self.alpha_bbox[3]) / 2

    @property
    def slot_center_y(self) -> float:
        return self.slot_height / 2


def measure(sheet_path: Path, css_height: float) -> list[SlotMeasurement]:
    image = Image.open(sheet_path).convert("RGBA")
    alpha = image.getchannel("A")
    slot_names = ("gold", "purple", "stone")
    measurements: list[SlotMeasurement] = []

    for index, name in enumerate(slot_names):
        top = round(index * image.height / len(slot_names))
        bottom = round((index + 1) * image.height / len(slot_names))
        slot_alpha = alpha.crop((0, top, image.width, bottom))
        bbox = slot_alpha.getbbox()
        if bbox is None:
            raise RuntimeError(f"No painted pixels found in {name} slot")

        measurement = SlotMeasurement(name, top, bottom, bbox)
        scale = css_height / measurement.slot_height
        offset_css = (measurement.painted_center_y - measurement.slot_center_y) * scale
        measurements.append(measurement)
        print(
            f"{name:6} slot={image.width}x{measurement.slot_height}px "
            f"painted={measurement.painted_width}x{measurement.painted_height}px "
            f"painted_center_offset={offset_css:+.2f} CSS px at {css_height:g}px height"
        )

    offsets = []
    for measurement in measurements[:2]:
        scale = css_height / measurement.slot_height
        offsets.append((measurement.painted_center_y - measurement.slot_center_y) * scale)
    recommended = sum(offsets) / len(offsets)
    print(f"recommended_label_translate_y={recommended:+.2f}px")
    return measurements


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "sheet",
        nargs="?",
        type=Path,
        default=Path("public/images/projects/fallen-throne/generated/custom-buttons.png"),
    )
    parser.add_argument("--css-height", type=float, default=78)
    args = parser.parse_args()
    measure(args.sheet, args.css_height)


if __name__ == "__main__":
    main()
