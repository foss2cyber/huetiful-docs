---
title: Palette utilities.
date: '2023-09-29'
draft: false
summary: Utilities for generating custom palettes.
layout: PostSimple
canonicalUrl: https://prjctimg.github.io/huetiful/api/palettes
---

#### base

**Parameters:**
`(scheme: palette) => (color: Color, hex = false): Color[]`
_scheme_ Any classic color scheme either "analogous"|"triadic"|"tetradic"|"complementary"|"splitComplementary"
_hex_ Optional boolen to return lch color objects or hex codes in the result array. Default is false which returns LCH color objects.

**Returns:**
An array of 8 character hex codes. Elements in the array depend on the number of sample colors in the targeted scheme.

**Description:**
Generates a randomised classic color scheme from a single base color.

**Example:**

```javascript
// Example
```

#### earthtone

**Parameters:**
`(color: Color, tone: keyof earthtones, num = 1): Color[]`
_color_ The color to interpolate an earth tone with.
_tone_ The earthtone to interpolate with.
_num_ The number of iterations to produce from the color and earthtone.

**Returns:**
The array o colors resulting from the earthtone interpolation.

**Description:**
Creates a scale of a spline based interpolation between an earthtone and a color.

**Example:**

```javascript
// Example
```

#### pastel

**Parameters:**
`(color: Color, hex = true): Color`
_color_ The color to return a pastel variant of.
_hex_ Pass in true to return an 8-character hex code else it will return an HSV color object.

**Returns:**
A random pastel color.

**Description:**
Returns a random pastel variant of the passed in color.

**Example:**

```javascript
// Example
```

We can also create a palette of hue shifted colors from a single base color. The _hueShift_ utility can achieve the same:

#### hueShift

**Parameters:**
`(color: Color,
opts = {
minLightness,
maxLightness,
hueStep,
num },hex = true
): Color[]`
_color_ **The color to use as the base of the hueshift. Colors are internally converted to LCH.**
_minLightness_ **Minimum lightness value (range 0-100).**
_maxLightness_ **Maximum lightness value (range 0-100).**
_num_ **The number of iterations to do on the color. It equals the amount of elements in the result array.**
_hueStep_ **Controls how much the hue will shift at each iteration.**
_hex_ **Optional boolean to return lch color objects or hex codes in the result array. Default is true which returns hexadecimal colors.**

**Returns:**
An array of colors.

**Description:**
Generates a palette of hue shifted colors (as a color becomes lighter, its hue shifts up and darker when its hue shifts down. ) from a single base color. Min and max lightness value determine how light or dark our color will be at either extreme.

**Example:**

```javascript
import { hueShift } from "huetiful-js";

let hueShiftedPalette = hueShift("#3e0000", {}, true);

console.log(hueShiftedPalette);

// [
  '#ffffe1', '#ffdca5',
  '#ca9a70', '#935c40',
  '#5c2418', '#3e0000',
  '#310000', '#34000f',
  '#38001e', '#3b002c',
  '#3b0c3a'
]

```

#### pairedScheme

**Parameters:**
`(color: Color,hueStep: number,num: number, via: tone,overrides:{}): Color[]`
_color_ The color to return a paired color scheme from.
_via_ The tone to interpolate through (either white or black). Default is white.
_hueStep_ The value to increment the base color's hue channel with.
_num_ The number of color samples to generate.
_overrides_ The optional overrides object to customize per channel options like interpolation methods and channel fixups.

**Returns:**
An array containing the paired scheme.

**Description:**
Creates a scheme that consists of a base color that is incremented by a hueStep to get the final hue to pair with.The colors are interpolated via white or black.

#### getHue

**Parameters:**
`(color: Color): string`

**Returns:**
The name of the hue family for example red or green.

**Description:**
Gets the hue family which a acolor belongs to with the overtone included (if it has one.). For achromatic colors it returns the string "gray".

```javascript
// Example
```
