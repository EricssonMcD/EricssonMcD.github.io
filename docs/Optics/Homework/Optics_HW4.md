---
section: "Optics Homework"
title: "Homework 4"
---

**Create code to calculate the full ABCD matrix of a thick lens of index, n, front surface radius of curvature, R1 , back surface radius of curvature, $R_2$, and thickness, $t$.  Use $R_1$=183.6 mm, $_R2$=153.6 mm, $n$=1.45843 (Fused Silica for the Fraunhofer d-line at  = 589.29 nm), and $t$=2.9 mm.  The diameter of this lens is $D$ = 50.0 mm.  This is similar but not quite ThorLabs Lens LB4842-UV.**

**For this problem, your working code will be your submission and it should generate all requested figures.  You do not need to attach these figures to this submission or email to me.**

1. **Use this code to calculate the positions of the four cardinal points, $\mathcal{F}$, $\mathcal{F}$', $p$, and $p$'.  From these, calculate the front (f) and back (f') focal lengths.**
2. **Use this code to plot out the effective front, $f$, and back focal length, $f$', of this thick lens as a function of thickness, $t$, if $t$ ranges from 0.9 mm to 5.0 mm in 0.1 mm steps.**  
3. **Use this code to plot out the effective front, $f$,  and back focal length, $f$', of this thick lens as a function of $R_2$.  Start at $R_2$=153.6 mm and increase at 0.1 mm step size until $R_2$=183.6 mm.  What is the ratio of the front to back focal lengths over this range?**
4. **Use this code to plot out the effective front, $f$, and back focal length, $f$', of this thick lens as a refractive index $n$.  Start at $n$=1.4701 (Fused Silica at 400 nm)  and increase at 0.0001 step size until $n$=1.4603 (FS at 540 nm, where it is a maximum in the visible).  Assuming a design wavelength of 589.29 nm, plot the percent error for the focal position as a function of wavelength across the visible spectrum (related to lateral color)?  Use 400 nm to 700 nm for the visible spectrum for this part of the problem.**
5. **By how much would switching to a $D$ = 25.0 mm change both the front and back focal lengths (LB4282-UV)?**


## Solution:

First I will define a few Python Functions that will take things like the index of refraction, focal length, lens thickness, etc. and will create the relevant transfer matrices. 

### Free Space Travel
``` py
def free_space_travel(d, n_1):
def free_space_travel(d, n=1):
    """This function takes a distance, d, and
    refractive index, n. Using these we calculate the
    free space transfer matrix"""
    return np.array([[1, d / n],[0, 1]])
```

### Flat Interface
``` py
def flat_interface(n1=1, n2=1):
    return np.array([
        [1, 0],
        [0, n1/n2]
    ])
```

### Thin Lens
``` py 
def thin_lens(n, f):
def thin_lens(f, n=1):
    """This function takes a refractive index of a lens
    material and a focal length and creates the transfer matrix
    for a thin lens. 
    
    *f can be positive or negative*"""

    return np.array([[1,0],[-n / f]])
```

### Curved Interface
``` py
def curved_int(R, n1=1, n2=1):
    """This function takes an initial and final refractive index
    along with a radius of curvature and calculates the transfer
    matrix for a curved interface.
    
    *R > 0 indicates light hitting a convex surface
    R < 0 indicates light hitting a concave surface*"""

    return np.array([[1,0],[(n1 - n2)/R , n1/n2]])
```

### Thick Lens
``` py
    def thick_lens(R1, R2, n, d):
    """This function combines two curved lenses and free
    space travel through index of refraction n a distance d"""
    lens_1 = curved_int(1, n, R1)
    lens_2 = curved_int(n,1,R2)
    free_space = free_space_travel(d, n)

    m_thick_lens = lens_2 @ free_space @ lens_1
    return m_thick_lens
```

### Optical System Matrix
``` py 
def system_matrix(*elements):
    M = np.eye(2)
    for E in elements:
        M = E @ M
    return M
```
