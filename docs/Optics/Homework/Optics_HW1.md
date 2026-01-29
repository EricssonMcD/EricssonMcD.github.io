---
section: "Optics Homework"
title: "Homework 1"
---
# Homework 1:

**Staring with Maxwell's equations in matter and in the time-domain, Fourier transform these equations and rewrite them in the frequency domain.**

## Solution

The fourier transform is defined as:

$$ \tilde{F}[f(t)] = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i \omega t} dt$$
 
--- 
### Gauss' Law for Electricity in matter:

$$\vec{\nabla} \cdot \vec{D}(\vec{r},t) = \rho_{f}(\vec{r},t)$$ 

Taking the Fourier transform:

$$ \int_{-\infty}^{\infty} \vec{\nabla} \cdot \vec{D}(\vec{r},t) e^{-i \omega t} dt = \int_{-\infty}^{\infty} \rho_{f}(\vec{r},t) e^{-i \omega t} dt $$

Bringing the divergence operator outside the integral (as it only acts on spatial coordinates):

$$ \vec{\nabla} \cdot \int_{-\infty}^{\infty} \vec{D}(\vec{r},t) e^{-i \omega t} dt = \int_{-\infty}^{\infty} \rho_{f}(\vec{r},t) e^{-i \omega t} dt $$

Simplifying the Fourier transforms:

$$\vec{\nabla} \cdot \tilde{D}(\vec{r},\omega) = \tilde{\rho}_{f}(\vec{r},\omega)$$

---

### Gauss' Law for Magnetism in matter:
$$
\vec{\nabla} \cdot \vec{B}(\vec{r},t) = 0
$$

Taking the Fourier transform:

$$\int_{-\infty}^{\infty} \vec{\nabla} \cdot \vec{B}(\vec{r},t) e^{-i \omega t} dt = 0 $$

Bringing the divergence operator outside the integral:

$$ 
\vec{\nabla} \cdot \int_{-\infty}^{\infty} \vec{B}(\vec{r},t) e^{-i \omega t} dt = 0 $$

Simplifying the Fourier transform:

$$
\vec{\nabla} \cdot \tilde{B}(\vec{r},\omega) = 0
$$

--- 
### Faraday's Law in matter:

$$
\vec{\nabla} \times \vec{E}(\vec{r},t) = - \frac{\partial \vec{B}(\vec{r},t)}{\partial t}
$$

Multiplying both sides by $e^{-i \omega t}$:

$$
 \vec{\nabla} \times \vec{E}(\vec{r},t) e^{-i \omega t}  = -  \frac{\partial \vec{B}(\vec{r},t)}{\partial t} e^{-i \omega t}
$$



We can begin with the definition of the product rule:

$$
\frac{d}{dt}(fg) = g \frac{f}{dt} + f\frac{dg}{dt}
$$

This can be rearranged to

$$
-f\frac{dg}{dt} =  g \frac{df}{dt} - \frac{d}{dt}(fg)
$$

We can take the $\frac{\partial \vec{B}}{\partial t}$ to be $-f\frac{dg}{dt}$ and fill in the rest of the rearranged product rule formula to get:

$$
 \vec{\nabla} \times \vec{E}(\vec{r},t) e^{-i \omega t}  = \vec{B}(\vec{r},t) \frac{\partial e^{-i \omega t}}{\partial t} - \frac{\partial e^{-i \omega t \vec{B}(\vec{r},t)}}{\partial t}
$$

taking the derivative in the first term on the right side gives us:

$$
 \vec{\nabla} \times \vec{E}(\vec{r},t) e^{-i \omega t}  =-i \omega \vec{B}(\vec{r},t) e^{-i \omega t} - \frac{\partial e^{-i \omega t \vec{B}(\vec{r},t)}}{\partial t}
$$

Then we can integrate both sides of the equation:

$$
\int_{-infty}^{infty} \vec{\nabla} \times \vec{E}(\vec{r},t) e^{-i \omega t}  = \int_{-\infty}^{\infty} -i \omega \vec{B}(\vec{r},t) e^{-i \omega t} - \frac{\partial e^{-i \omega t \vec{B}(\vec{r},t)}}{\partial t}dt
$$

Bringing the curl outside the integral:

$$ 
\vec{\nabla} \times \int_{-\infty}^{\infty} \vec{E}(\vec{r},t) e^{-i \omega t} dt = - \int_{-\infty}^{\infty} -i \omega \vec{B}(\vec{r},t) e^{-i \omega t} - \frac{\partial e^{-i \omega t \vec{B}(\vec{r},t)}}{\partial t}dt
$$

Simplifying the Fourier transform on the left side:

$$ \vec{\nabla} \times \tilde{E}(\vec{r},\omega) = - \int_{-\infty}^{\infty} -i \omega \vec{B}(\vec{r},t) e^{-i \omega t} - \frac{\partial e^{-i \omega t \vec{B}(\vec{r},t)}}{\partial t}dt$$

Now the on the right hand side we can change the sum in the integral to a sum of integrals and simplify the fourier transform. 

$$ \vec{\nabla} \times \tilde{E}(\vec{r},\omega) = i \omega \int_{-\infty}^{\infty} \vec{B}(\vec{r},t) e^{-i \omega t} - \int_{-\infty}^{\infty} \frac{\partial e^{-i \omega t \vec{B}(\vec{r},t)}}{\partial t}dt$$

Then the time derivative is linear so we bring it out of the last remaining integral term

$$ \vec{\nabla} \times \tilde{E}(\vec{r},\omega) = i \omega \int_{-\infty}^{\infty} \vec{B}(\vec{r},t) e^{-i \omega t} - \frac{\partial}{\partial t}\int_{-\infty}^{\infty} e^{-i \omega t} \vec{B}(\vec{r},t)dt$$

Then we can simplify the FT.

$$ \vec{\nabla} \times \tilde{E}(\vec{r},\omega) = -i \omega \tilde{B}(\vec{r},\nu)  -  \frac{\partial  \tilde{B}(\vec{r},\nu)}{\partial t}dt$$

We can recognize that this last term is a time derivative of a function in frequency space so that derivative will be 0 resulting in:

$$\vec{\nabla} \times \tilde{E}(\vec{r},\omega) = - i \omega \tilde{B}(\vec{r},\omega)$$

---
### Ampere-Maxwell Law in matter:

$$
\vec{\nabla} \times \vec{H}(\vec{r},t) = \vec{J}_{f}(\vec{r},t) + \frac{\partial \vec{D}(\vec{r},t)}{\partial t}
$$

Using a similar technique as above, we can first multiply on both sides by $e^{-i \omega t}$ and then take the partial deriavte on the right hand side and expand it with the product rule:

$$
\ e^{-i \omega t} \vec{\nabla} \times \vec{H}(\vec{r},t) = e^{-i \omega t}\vec{J}_{f}(\vec{r},t) + e^{i \omega t} \frac{\partial \vec{D}(\vec{r},t)}{\partial t}
$$

then we make the substitution:

$$
e^{-i \omega t} \frac{\partial \vec{D}(\vec{r},t)}{\partial t} = \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} - \vec{D}(\vec{r},t) \frac{\partial e^{-i \omega t}}{\partial t}
$$

$$
\ e^{-i \omega t} \vec{\nabla} \times \vec{H}(\vec{r},t) = e^{-i \omega t}\vec{J}_{f}(\vec{r},t) + \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} - \vec{D}(\vec{r},t) \frac{\partial e^{-i \omega t}}{\partial t}
$$

Then we can integrate both sides:

$$
\int_{-\infty}^{\infty} e^{-i \omega t} \vec{\nabla} \times \vec{H}(\vec{r},t) dt = \int_{-\infty}^{\infty} e^{-i \omega t}\vec{J}_{f}(\vec{r},t) + \int_{-\infty}^{\infty} \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} dt - \int_{-\infty}^{\infty} \vec{D}(\vec{r},t) \frac{\partial e^{-i \omega t}}{\partial t}dt
$$

On the left we can bring the curl operator outside of the time integral and on the right we can simplify the $\vec{J}$ FT.

$$
\vec{\nabla} \times \int_{-\infty}^{\infty} e^{-i \omega t}  \vec{H}(\vec{r},t) dt = \tilde{J}_{f}(\vec{r},\nu) + \int_{-\infty}^{\infty} \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} dt - \int_{-\infty}^{\infty} \vec{D}(\vec{r},t) \frac{\partial e^{-i \omega t}}{\partial t}dt
$$

Then we can simplify the FT on the left hand side:

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\nu) = \tilde{J}_{f}(\vec{r},\nu) + \int_{-\infty}^{\infty} \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} dt - \int_{-\infty}^{\infty} \vec{D}(\vec{r},t) \frac{\partial e^{-i \omega t}}{\partial t}dt
$$

We can take the derivative in the last term to get 

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\nu) = \tilde{J}_{f}(\vec{r},\nu) + \int_{-\infty}^{\infty} \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} dt - \int_{-\infty}^{\infty} -i \omega \vec{D}(\vec{r},t)  e^{-i \omega t}dt
$$

which then becomes:

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\nu) = \tilde{J}_{f}(\vec{r},\nu) + \int_{-\infty}^{\infty} \frac{\partial e^{-i \omega t}\vec{D}(\vec{r},t)}{\partial t} dt  + i \omega \vec{D}(\tilde{r},\nu)
$$

Then the time derivative is linear so we bring it out of the last remaining integral term

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\nu) = \tilde{J}_{f}(\vec{r},\nu) +\frac{\partial}{\partial t} \int_{-\infty}^{\infty} e^{-i \omega t}\vec{D}(\vec{r},t) dt  + i \omega \vec{D}(\tilde{r},\nu)
$$

Finally we can simplify the last FT:

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\nu) = \tilde{J}_{f}(\vec{r},\nu) +\frac{\partial}{\partial t}\vec{D}(\vec{r},\nu)  + i \omega \tilde{D}(\vec{r},\nu)
$$

This is another time derivative of a frequency function so it goes to 0 leaving the final result 

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\nu)= \tilde{J}_{f}(\vec{r},\nu) ++ i \omega \tilde{D}(\vec{r},\nu)
$$