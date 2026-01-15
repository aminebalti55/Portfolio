from PIL import Image, ImageDraw, ImageFilter
import os

# Base paths
base_path = r"C:\Users\amine.balti\Portfolio\public\images\projects\invoicebirds"

def load_image(name):
    return Image.open(os.path.join(base_path, name))

def add_shadow(img, offset=(20, 20), shadow_color=(0, 0, 0, 80), blur_radius=30):
    """Add a soft shadow to an image"""
    # Create a new image with extra space for shadow
    shadow_img = Image.new('RGBA', (img.width + 60, img.height + 60), (0, 0, 0, 0))
    
    # Create shadow
    shadow = Image.new('RGBA', img.size, shadow_color)
    shadow_img.paste(shadow, (offset[0] + 20, offset[1] + 20))
    shadow_img = shadow_img.filter(ImageFilter.GaussianBlur(blur_radius))
    
    # Paste original image
    shadow_img.paste(img, (20, 20), img if img.mode == 'RGBA' else None)
    return shadow_img

def create_rounded_corners(img, radius=20):
    """Add rounded corners to an image"""
    # Convert to RGBA if needed
    if img.mode != 'RGBA':
        img = img.convert('RGBA')
    
    # Create mask for rounded corners
    mask = Image.new('L', img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), img.size], radius=radius, fill=255)
    
    # Apply mask
    output = Image.new('RGBA', img.size, (0, 0, 0, 0))
    output.paste(img, mask=mask)
    return output

def create_artboard_1():
    """Hero + Features Header + Invoices Feature - Diagonal cascade layout"""
    print("Creating Artboard 1: Hero Showcase...")
    
    # Canvas size
    canvas_width = 2400
    canvas_height = 1600
    
    # Create gradient background (dark blue to dark green)
    canvas = Image.new('RGB', (canvas_width, canvas_height), (15, 23, 42))
    draw = ImageDraw.Draw(canvas)
    
    # Add gradient effect
    for y in range(canvas_height):
        r = int(15 + (25 - 15) * y / canvas_height)
        g = int(23 + (45 - 23) * y / canvas_height)
        b = int(42 + (35 - 42) * y / canvas_height)
        draw.line([(0, y), (canvas_width, y)], fill=(r, g, b))
    
    # Load images
    hero = load_image("invoicebirds-01-hero.png")
    features = load_image("invoicebirds-02-features-header.png")
    invoices = load_image("invoicebirds-03-invoices-feature.png")
    
    # Scale images
    scale_hero = 0.55
    scale_features = 0.45
    scale_invoices = 0.5
    
    hero = hero.resize((int(hero.width * scale_hero), int(hero.height * scale_hero)), Image.Resampling.LANCZOS)
    features = features.resize((int(features.width * scale_features), int(features.height * scale_features)), Image.Resampling.LANCZOS)
    invoices = invoices.resize((int(invoices.width * scale_invoices), int(invoices.height * scale_invoices)), Image.Resampling.LANCZOS)
    
    # Add rounded corners
    hero = create_rounded_corners(hero, 15)
    features = create_rounded_corners(features, 15)
    invoices = create_rounded_corners(invoices, 15)
    
    # Add shadows
    hero_shadow = add_shadow(hero)
    features_shadow = add_shadow(features)
    invoices_shadow = add_shadow(invoices)
    
    # Position images in diagonal cascade
    canvas.paste(hero_shadow, (80, 80), hero_shadow)
    canvas.paste(features_shadow, (canvas_width - features_shadow.width - 100, 200), features_shadow)
    canvas.paste(invoices_shadow, (300, canvas_height - invoices_shadow.height - 100), invoices_shadow)
    
    # Save
    output_path = os.path.join(base_path, "artboard-01-hero-showcase.png")
    canvas.save(output_path, quality=95)
    print(f"Saved: {output_path}")

def create_artboard_2():
    """Payments + Business Suite + Contracts - Overlapping cards layout"""
    print("Creating Artboard 2: Business Features...")
    
    canvas_width = 2400
    canvas_height = 1600
    
    # Create dark gradient background
    canvas = Image.new('RGB', (canvas_width, canvas_height), (20, 30, 48))
    draw = ImageDraw.Draw(canvas)
    
    # Gradient
    for y in range(canvas_height):
        r = int(20 + (15 - 20) * y / canvas_height)
        g = int(30 + (40 - 30) * y / canvas_height)
        b = int(48 + (55 - 48) * y / canvas_height)
        draw.line([(0, y), (canvas_width, y)], fill=(r, g, b))
    
    # Load images
    payments = load_image("invoicebirds-04-payments-feature.png")
    business = load_image("invoicebirds-05-business-suite.png")
    contracts = load_image("invoicebirds-06-contracts.png")
    
    # Scale
    scale = 0.5
    payments = payments.resize((int(payments.width * scale), int(payments.height * scale)), Image.Resampling.LANCZOS)
    business = business.resize((int(business.width * scale), int(business.height * scale)), Image.Resampling.LANCZOS)
    contracts = contracts.resize((int(contracts.width * scale), int(contracts.height * scale)), Image.Resampling.LANCZOS)
    
    # Round corners
    payments = create_rounded_corners(payments, 15)
    business = create_rounded_corners(business, 15)
    contracts = create_rounded_corners(contracts, 15)
    
    # Add shadows
    payments_shadow = add_shadow(payments)
    business_shadow = add_shadow(business)
    contracts_shadow = add_shadow(contracts)
    
    # Overlapping layout - fan out from center
    canvas.paste(payments_shadow, (100, 250), payments_shadow)
    canvas.paste(business_shadow, (canvas_width // 2 - business_shadow.width // 2, 100), business_shadow)
    canvas.paste(contracts_shadow, (canvas_width - contracts_shadow.width - 100, 350), contracts_shadow)
    
    output_path = os.path.join(base_path, "artboard-02-business-features.png")
    canvas.save(output_path, quality=95)
    print(f"Saved: {output_path}")

def create_artboard_3():
    """Proposals + Expenses + Global Stats - Stacked perspective layout"""
    print("Creating Artboard 3: Analytics & Tracking...")
    
    canvas_width = 2400
    canvas_height = 1600
    
    # Green-tinted dark background
    canvas = Image.new('RGB', (canvas_width, canvas_height), (10, 35, 30))
    draw = ImageDraw.Draw(canvas)
    
    for y in range(canvas_height):
        r = int(10 + (20 - 10) * y / canvas_height)
        g = int(35 + (50 - 35) * y / canvas_height)
        b = int(30 + (45 - 30) * y / canvas_height)
        draw.line([(0, y), (canvas_width, y)], fill=(r, g, b))
    
    # Load images
    proposals = load_image("invoicebirds-07-proposals.png")
    expenses = load_image("invoicebirds-08-expenses.png")
    stats = load_image("invoicebirds-09-global-stats.png")
    
    # Scale
    scale = 0.52
    proposals = proposals.resize((int(proposals.width * scale), int(proposals.height * scale)), Image.Resampling.LANCZOS)
    expenses = expenses.resize((int(expenses.width * scale), int(expenses.height * scale)), Image.Resampling.LANCZOS)
    stats = stats.resize((int(stats.width * scale), int(stats.height * scale)), Image.Resampling.LANCZOS)
    
    # Round corners
    proposals = create_rounded_corners(proposals, 15)
    expenses = create_rounded_corners(expenses, 15)
    stats = create_rounded_corners(stats, 15)
    
    # Add shadows
    proposals_shadow = add_shadow(proposals)
    expenses_shadow = add_shadow(expenses)
    stats_shadow = add_shadow(stats)
    
    # Stacked diagonal layout
    canvas.paste(stats_shadow, (150, 100), stats_shadow)
    canvas.paste(expenses_shadow, (canvas_width - expenses_shadow.width - 150, 150), expenses_shadow)
    canvas.paste(proposals_shadow, (canvas_width // 2 - proposals_shadow.width // 2, canvas_height - proposals_shadow.height - 80), proposals_shadow)
    
    output_path = os.path.join(base_path, "artboard-03-analytics-tracking.png")
    canvas.save(output_path, quality=95)
    print(f"Saved: {output_path}")

def create_artboard_4():
    """Pricing + Testimonials + FAQ - Clean grid layout"""
    print("Creating Artboard 4: Social Proof & Pricing...")
    
    canvas_width = 2400
    canvas_height = 1600
    
    # Warm dark background
    canvas = Image.new('RGB', (canvas_width, canvas_height), (25, 25, 35))
    draw = ImageDraw.Draw(canvas)
    
    for y in range(canvas_height):
        r = int(25 + (35 - 25) * y / canvas_height)
        g = int(25 + (30 - 25) * y / canvas_height)
        b = int(35 + (50 - 35) * y / canvas_height)
        draw.line([(0, y), (canvas_width, y)], fill=(r, g, b))
    
    # Load images
    pricing = load_image("invoicebirds-10-pricing.png")
    testimonials = load_image("invoicebirds-11-testimonials.png")
    faq = load_image("invoicebirds-12-faq.png")
    
    # Scale
    scale = 0.52
    pricing = pricing.resize((int(pricing.width * scale), int(pricing.height * scale)), Image.Resampling.LANCZOS)
    testimonials = testimonials.resize((int(testimonials.width * scale), int(testimonials.height * scale)), Image.Resampling.LANCZOS)
    faq = faq.resize((int(faq.width * scale), int(faq.height * scale)), Image.Resampling.LANCZOS)
    
    # Round corners
    pricing = create_rounded_corners(pricing, 15)
    testimonials = create_rounded_corners(testimonials, 15)
    faq = create_rounded_corners(faq, 15)
    
    # Add shadows
    pricing_shadow = add_shadow(pricing)
    testimonials_shadow = add_shadow(testimonials)
    faq_shadow = add_shadow(faq)
    
    # Triangular layout
    canvas.paste(testimonials_shadow, (canvas_width // 2 - testimonials_shadow.width // 2, 80), testimonials_shadow)
    canvas.paste(pricing_shadow, (120, canvas_height - pricing_shadow.height - 100), pricing_shadow)
    canvas.paste(faq_shadow, (canvas_width - faq_shadow.width - 120, canvas_height - faq_shadow.height - 100), faq_shadow)
    
    output_path = os.path.join(base_path, "artboard-04-pricing-social.png")
    canvas.save(output_path, quality=95)
    print(f"Saved: {output_path}")

def create_artboard_5():
    """Full showcase - Hero + Contracts + Testimonials in elegant composition"""
    print("Creating Artboard 5: Full Product Showcase...")
    
    canvas_width = 2800
    canvas_height = 1800
    
    # Rich dark blue background
    canvas = Image.new('RGB', (canvas_width, canvas_height), (12, 20, 35))
    draw = ImageDraw.Draw(canvas)
    
    # Create radial-like gradient effect
    for y in range(canvas_height):
        for x in range(0, canvas_width, 10):
            # Distance from center
            cx, cy = canvas_width // 2, canvas_height // 2
            dist = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            max_dist = ((cx) ** 2 + (cy) ** 2) ** 0.5
            factor = dist / max_dist
            
            r = int(12 + (8 - 12) * factor)
            g = int(20 + (25 - 20) * factor)
            b = int(35 + (45 - 35) * factor)
            draw.rectangle([(x, y), (x + 10, y + 1)], fill=(r, g, b))
    
    # Load key images
    hero = load_image("invoicebirds-01-hero.png")
    contracts = load_image("invoicebirds-06-contracts.png")
    testimonials = load_image("invoicebirds-11-testimonials.png")
    
    # Scale for showcase
    hero = hero.resize((int(hero.width * 0.45), int(hero.height * 0.45)), Image.Resampling.LANCZOS)
    contracts = contracts.resize((int(contracts.width * 0.42), int(contracts.height * 0.42)), Image.Resampling.LANCZOS)
    testimonials = testimonials.resize((int(testimonials.width * 0.45), int(testimonials.height * 0.45)), Image.Resampling.LANCZOS)
    
    # Round corners
    hero = create_rounded_corners(hero, 12)
    contracts = create_rounded_corners(contracts, 12)
    testimonials = create_rounded_corners(testimonials, 12)
    
    # Add shadows
    hero_shadow = add_shadow(hero, blur_radius=35)
    contracts_shadow = add_shadow(contracts, blur_radius=35)
    testimonials_shadow = add_shadow(testimonials, blur_radius=35)
    
    # Elegant asymmetric layout
    canvas.paste(hero_shadow, (100, 150), hero_shadow)
    canvas.paste(contracts_shadow, (canvas_width - contracts_shadow.width - 100, 80), contracts_shadow)
    canvas.paste(testimonials_shadow, (canvas_width // 2 - testimonials_shadow.width // 2 + 100, canvas_height - testimonials_shadow.height - 100), testimonials_shadow)
    
    output_path = os.path.join(base_path, "artboard-05-full-showcase.png")
    canvas.save(output_path, quality=95)
    print(f"Saved: {output_path}")

# Run all artboard creations
if __name__ == "__main__":
    print("Creating beautiful artboards...")
    print("=" * 50)
    create_artboard_1()
    create_artboard_2()
    create_artboard_3()
    create_artboard_4()
    create_artboard_5()
    print("=" * 50)
    print("All artboards created successfully!")
