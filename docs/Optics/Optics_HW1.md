# Homework 1:

Staring with Maxwell's equations in matter and in the time-domain, Fourier transform these equations and rewrite them in the frequency domain.

### Solution

The fourier transform is defined as:
$$ \tilde{F}[f(t)] = F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i \omega t} dt$$
--- 
Gauss' Law in matter:
$$ \vec{\nabla} \cdot \vec{D}(\vec{r},t) = \rho_{f}(\vec{r},t) $$
Taking the Fourier transform:
$$ \int_{-\infty}^{\infty} \vec{\nabla} \cdot \vec{D}(\vec{r},t) e^{-i \omega t} dt = \int_{-\infty}^{\infty} \rho_{f}(\vec{r},t) e^{-i \omega t} dt $$
Bringing the divergence operator outside the integral (as it only acts on spatial coordinates):
$$ \vec{\nabla} \cdot \int_{-\infty}^{\infty} \vec{D}(\vec{r},t) e^{-i \omega t} dt = \int_{-\infty}^{\infty} \rho_{f}(\vec{r},t) e^{-i \omega t} dt $$
Recognizing the Fourier transforms:
$$ \vec{\nabla} \cdot \tilde{D}(\vec{r},\omega) = \tilde{\rho}_{f}(\vec{r},\omega) $$
---