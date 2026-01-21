# Homework 1:

Staring with Maxwell's equations in matter and in the time-domain, Fourier transform these equations and rewrite them in the frequency domain.

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

Recognizing the Fourier transforms:

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

Recognizing the Fourier transform:

$$
\vec{\nabla} \cdot \tilde{B}(\vec{r},\omega) = 0
$$

--- 
### Faraday's Law in matter:

$$
\vec{\nabla} \times \vec{E}(\vec{r},t) = - \frac{\partial \vec{B}(\vec{r},t)}{\partial t}
$$

Taking the Fourier transform:

$$
\int_{-\infty}^{\infty} \vec{\nabla} \   imes \vec{E}(\vec{r},t) e^{-i \omega t} dt = - \int_{-\infty}^{\infty} \frac{\partial \vec{B}(\vec{r},t)}{\partial t} e^{-i \omega t} dt 
$$

Bringing the curl operator outside the integral:

$$ 
\vec{\nabla} \times \int_{-\infty}^{\infty} \vec{E}(\vec{r},t) e^{-i \omega t} dt = - \int_{-\infty}^{\infty} \frac{\partial \vec{B}(\vec{r},t)}{\partial t} e^{-i \omega t} dt
$$

Recognizing the Fourier transform on the left side:

$$ \vec{\nabla} \times \tilde{E}(\vec{r},\omega) = - \int_{-\infty}^{\infty} \frac{\partial \vec{B}(\vec{r},t)}{\partial t} e^{-i \omega t} dt $$

Using integration by parts on the right side:

$$
u = e^{-i \omega t} \quad dv = \frac{\partial \vec{B}(\vec{r},t)}{\partial t} dt
$$

$$
du = -i \omega e^{-i \omega t} dt \quad v = \vec{B}(\vec{r},t)
$$

$$
\int u \, dv = uv - \int v \, du
$$

$$
\int_{-\infty}^{\infty} \frac{\partial \vec{B}(\vec{r},t)}{\partial t} e^{-i \omega t} dt = \left[ \vec{B}(\vec{r},t) e^{-i \omega t} \right]_{-\infty}^{\infty} + i \omega \int_{-\infty}^{\infty} \vec{B}(\vec{r},t) e^{-i \omega t} dt
$$

Assuming the fields vanish at infinity, the boundary term is zero:

$$
\int_{-\infty}^{\infty} \frac{\partial \vec{B}(\vec{r},t)}{\partial t} e^{-i \omega t} dt = i \omega \tilde{B}(\vec{r},\omega)
$$

Resulting in:

$$\vec{\nabla} \times \tilde{E}(\vec{r},\omega) = - i \omega \tilde{B}(\vec{r},\omega)$$

---
### Ampere-Maxwell Law in matter:

$$
\vec{\nabla} \times \vec{H}(\vec{r},t) = \vec{J}_{f}(\vec{r},t) + \frac{\partial \vec{D}(\vec{r},t)}{\partial t}
$$

Taking the Fourier transform:

$$
\int_{-\infty}^{\infty} \vec{\nabla} \times \vec{H}(\vec{r},t) e^{-i \omega t} dt = \int_{-\infty}^{\infty} \vec{J}_{f}(\vec{r},t) e^{-i \omega t} dt + \int_{-\infty}^{\infty} \frac{\partial \vec{D}(\vec{r},t)}{\partial t} e^{-i \omega t} dt
$$

Bringing the curl operator outside the integral:

$$
\vec{\nabla} \times \int_{-\infty}^{\infty} \vec{H}(\vec{r},t) e^{-i \omega t} dt = \int_{-\infty}^{\infty} \vec{J}_{f}(\vec{r},t) e^{-i \omega t} dt + \int_{-\infty}^{\infty} \frac{\partial \vec{D}(\vec{r},t)}{\partial t} e^{-i \omega t} dt
$$

Recognizing the Fourier transforms on the left side and the first term on the right side:

$$
\vec{\nabla} \times \tilde{H}(\vec{r},\omega) = \tilde{J}_{f}(\vec{r},\omega) + \int_{-\infty}^{\infty} \frac{\partial \vec{D}(\vec{r},t)}{\partial t} e^{-i \omega t} dt
$$

Using integration by parts on the last term:

$$
u = e^{-i \omega t} \quad dv = \frac{\partial \vec{D}(\vec{r},t)}{\partial t} dt 
$$

$$ 
du = -i \omega e^{-i \omega t} dt \quad v = \vec{D}(\vec{r},t)
$$

$$ 
\int u \, dv = uv - \int v \, du 
$$

$$
\int_{-\infty}^{\infty} \frac{\partial \vec{D}(\vec{r},t)}{\partial t} e^{-i \omega t} dt = \left[ \vec{D}(\vec{r},t) e^{-i \omega t} \right]_{-\infty}^{\infty} + i \omega \int_{-\infty}^{\infty} \vec{D}(\vec{r},t) e^{-i \omega t} dt
$$

Assuming the fields vanish at infinity, the boundary term is zero:

$$
\int_{-\infty}^{\infty} \frac{\partial \vec{D}(\vec{r},t)}{\partial t} e^{-i \omega t} dt = i \omega \tilde{D}(\vec{r},\omega)
$$

Resulting in:

$$ 
\vec{\nabla} \times \tilde{H}(\vec{r},\omega) = \tilde{J}_{f}(\vec{r},\omega) + i \omega \tilde{D}(\vec{r},\omega) 
$$