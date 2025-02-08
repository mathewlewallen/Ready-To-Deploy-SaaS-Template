# Public Assets Directory

This directory contains static assets that will be served publicly by the Wasp application. Any files placed in this directory will be accessible through your application's URL.

## Usage

Place static files like:
- Images
- Fonts
- Icons (favicon.ico)
- Robots.txt
- Manifest files
- Other static assets

## Access

Files in this directory can be accessed at:
http://your-app-domain/filename.ext

For example:
- `/logo.png` -> `http://your-app-domain/logo.png`
- `/favicon.ico` -> `http://your-app-domain/favicon.ico`

## Best Practices

1. **Organization**: Consider creating subdirectories for different types of assets:
   - `/images/`
   - `/fonts/`
   - `/icons/`

2. **File Names**: Use lowercase names with hyphens for better URL compatibility
   - ✅ `company-logo.png`
   - ❌ `Company Logo.png`

3. **Security**: Avoid placing sensitive files in this directory as its contents are publicly accessible

4. **Optimization**: Compress and optimize assets before placing them here to improve load times

## Note

The public directory is automatically handled by Wasp's build process and integrated into your application's static file serving configuration.
