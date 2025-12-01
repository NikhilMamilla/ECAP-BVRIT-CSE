# ECAP Login Page - Required Images

## Image Directory Structure

Place all images in the `website/public/` directory with the following folder structure:

```
public/
├── collegeimages/
│   ├── title_head.jpg          (Header image - 1000x100px)
│   ├── body.jpg                (Banner image - 1000x143px)
│   ├── line.gif                (Separator line)
│   ├── bott_bg.gif             (Bottom background - 1000px wide)
│   │
│   ├── login_01.gif            (Employee panel - top left corner)
│   ├── login_02.gif            (Employee panel - top middle)
│   ├── login_03.gif            (Employee panel - top right)
│   ├── login_04.gif            (Employee panel - top right corner)
│   ├── login_10.gif            (Employee panel - left side)
│   ├── login_11.gif            (Employee panel - middle background)
│   ├── login_13.gif            (Employee panel - right side)
│   ├── login_18.gif            (Employee panel - bottom left)
│   ├── login_19.gif            (Employee panel - bottom middle left)
│   ├── login_20.gif            (Employee panel - LOGIN button)
│   ├── login_21.gif            (Employee panel - bottom middle right)
│   ├── login_26.gif            (Employee panel - bottom left corner)
│   ├── login_27.gif            (Employee panel - bottom middle left)
│   ├── login_28.gif            (Employee panel - bottom middle)
│   ├── login_29.gif            (Employee panel - bottom right corner)
│   │
│   ├── login_06.gif            (Student panel - top left corner)
│   ├── login_07.gif            (Student panel - top middle)
│   ├── login_08.gif            (Student panel - top right)
│   ├── login_09.gif            (Student panel - top right corner)
│   ├── login_14.gif            (Student panel - left side)
│   ├── login_15.gif            (Student panel - middle background)
│   ├── login_17.gif            (Student panel - right side)
│   ├── login_22.gif            (Student panel - bottom left)
│   ├── login_23.gif            (Student panel - bottom middle left)
│   ├── login_24.gif            (Student panel - LOGIN button)
│   ├── login_25.gif            (Student panel - bottom middle right)
│   ├── login_30.gif            (Student panel - bottom left corner)
│   ├── login_31.gif            (Student panel - bottom middle left)
│   ├── login_32.gif            (Student panel - bottom middle)
│   └── login_33.gif            (Student panel - bottom right corner)
│
└── collegeimages1/
    ├── login_01.gif            (Parent panel - top left corner)
    ├── login_02.gif            (Parent panel - top middle)
    ├── login_03.gif            (Parent panel - top right)
    ├── login_04.gif            (Parent panel - top right corner)
    ├── login_10.gif            (Parent panel - left side)
    ├── login_11.gif            (Parent panel - middle background)
    ├── login_13.gif            (Parent panel - right side)
    ├── login_18.gif            (Parent panel - bottom left)
    ├── login_19.gif            (Parent panel - bottom middle left)
    ├── login_20.gif            (Parent panel - LOGIN button)
    ├── login_21.gif            (Parent panel - bottom middle right)
    ├── login_26.gif            (Parent panel - bottom left corner)
    ├── login_27.gif            (Parent panel - bottom middle left)
    ├── login_28.gif            (Parent panel - bottom middle)
    └── login_29.gif            (Parent panel - bottom right corner)
```

## Image Details

### Header Images
- **title_head.jpg**: Main header with college logo and name (1000px width × 100px height)
- **body.jpg**: Banner image showing college building/entrance (1000px width × 143px height)
- **line.gif**: Horizontal separator line (1000px width, small height)
- **bott_bg.gif**: Bottom background/footer image (1000px width)

### Login Panel Images (Sliced Design)

Each login panel uses **sliced images** to create rounded borders and styled appearance:

#### Employee Login Panel (Purple/Blue theme)
- Uses images: `login_01.gif` through `login_29.gif` (except 05, 12, 16, 17, 24, 25, 30-33)
- These images create the rounded rectangular panel with styled borders

#### Student Login Panel (Orange/Red theme)
- Uses images: `login_06.gif`, `login_07.gif`, `login_08.gif`, `login_09.gif`, `login_14.gif`, `login_15.gif`, `login_17.gif`, `login_22.gif`, `login_23.gif`, `login_24.gif`, `login_25.gif`, `login_30.gif`, `login_31.gif`, `login_32.gif`, `login_33.gif`
- These images create the rounded rectangular panel with styled borders

#### Parent Login Panel (Blue theme)
- Uses images from `collegeimages1/` folder: `login_01.gif` through `login_29.gif` (same pattern as employee panel)
- These images create the rounded rectangular panel with styled borders

## Notes

1. **Image Format**: All images should be in GIF or JPG format as specified
2. **Dimensions**: The login panel images are sliced pieces that fit together like a puzzle to form the complete panel
3. **Colors**: Each panel has a different color theme:
   - Employee: Purple/Blue
   - Student: Orange/Red
   - Parent: Blue
4. **Background Images**: Some images are used as CSS background images (login_10.gif, login_11.gif, login_13.gif, etc.)

## Alternative Approach

If you don't have the original sliced images, you can:
1. Create modern CSS-styled panels instead of using sliced images
2. Use single panel images and style them with CSS
3. Use the existing design I created earlier (with gradient backgrounds)

Let me know if you need help creating a CSS-based version instead!

