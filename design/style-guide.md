# AlcaldeIntel MVP Design Guide

## Figma Prototype
A quick interactive prototype covering Login, Registration and Dashboard screens is available on Figma:
[AlcaldeIntel MVP Prototype](https://www.figma.com/file/TODO_REPLACE_WITH_REAL_LINK/AlcaldeIntel-MVP?type=design&node-id=0-1)

## Color Palette
- **Primary Blue**: `#0033A0`
- **Secondary Orange**: `#F57C00`
- **Neutral Light**: `#F2F4F7`
- **Neutral Dark**: `#1B1F24`
- **White**: `#FFFFFF`

The palette is inspired by institutional/governmental applications.

## Typography
- **Font Family**: `Roboto`, sans-serif
- **Page Titles**: 24px, bold
- **Card Titles**: 18px, medium
- **Body Text**: 16px, regular
- **Small Text**: 14px, regular

## Button Styles
- **Primary Button**: Primary blue background (`#0033A0`), white text, 4px border-radius, 8px vertical / 16px horizontal padding.
- **Secondary Button**: White background, primary blue border (1px solid), primary blue text, 4px border-radius.
- **Hover States**: Slightly darker shade for primary, and light blue background for secondary.

## Assets
SVG icons for the interface are stored in `frontend/src/assets/icons/`:
- `login.svg`
- `register.svg`
- `stats.svg`
- `reports.svg`
- `profile.svg`

These assets can be imported directly into Vue components as needed.
