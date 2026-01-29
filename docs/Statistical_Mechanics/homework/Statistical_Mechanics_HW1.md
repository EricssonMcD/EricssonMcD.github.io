---
section: "Statistical Mechanics Homework"
title: "Homework 1"
---

## **Problem 1**

Show that the eigenvalues of a Hermitian operator are real numbers [6 pts]

<h2>Solution</h2>

We can begin with the two eigenvalue equations:

$$\hat{H} | \psi_i \rangle = \lambda_i | \psi_i \rangle \hspace{1cm}  \hat{H} | \psi_j \rangle = \lambda_j | \psi_j \rangle$$

We can then multiply on the left of these equations by $\psi_j^{\dagger{}}$ and $\psi_j^{\dagger{}}$ respectively.

$$\langle \psi_j | \hat{H} | \psi_i \rangle = \lambda_i \langle \psi_j | \psi_i \rangle \hspace{1cm} \langle \psi_i |  \hat{H} | \psi_j \rangle = \lambda_j  \langle \psi_i |   \psi_j \rangle$$

If we take the complex conjugate of the equation on the right we get

$$\langle \hat{H}  \psi_j | \psi_i \rangle = \lambda_j^*  \langle \psi_j |   \psi_i \rangle$$

Because $\hat{H}$ is hermitian, we can rewrite this as

$$\langle  \psi_j | \hat{H} | \psi_i \rangle = \lambda_j^*  \langle \psi_j |   \psi_i \rangle $$

From here we can see that our first and second equations are both equal to $\langle  \psi_j | \hat{H} | \psi_i \rangle$ so forming this equality,

$$\langle \psi_j | \hat{H} | \psi_i \rangle = \lambda_i \langle \psi_j | \psi_i \rangle = \lambda_j^*  \langle \psi_j |   \psi_i \rangle$$

We can see that if we set $\psi_i = \psi_j$ we get 

$$\lambda_i \langle \psi_i | \psi_i \rangle = \lambda_i^*  \langle \psi_i |   \psi_i \rangle$$

$\langle \psi_i | \psi_i \rangle$ is a positive quantity meaning for the equality to hold, $\lambda_i$ must be equal to $\lambda_i^*$ which is only possible if $\lambda_i$ is real.

---

## **Problem 2**

Prove that wave functions corresponding to Different Eigenvalues of a Hermitian operator are orthogonal [6 pts]

<h2>Solution</h2>
Starting from the equation found in the last problem:

$$\langle \psi_j | \hat{H} | \psi_i \rangle = \lambda_i \langle \psi_j | \psi_i \rangle = \lambda_j^*  \langle \psi_j |   \psi_i \rangle$$

We can then take only the equality dealing with the eigenvalues

$$\lambda_i \langle \psi_j | \psi_i \rangle = \lambda_j^*  \langle \psi_j |   \psi_i \rangle$$

and subtract across on the right to get 

$$\lambda_i \langle \psi_j | \psi_i \rangle - \lambda_j^*  \langle \psi_j |   \psi_i \rangle = 0$$

Which after simplification (and knowing that $\lambda$ will be real) becomes 

$$(\lambda_i - \lambda_j)  \langle \psi_j |   \psi_i \rangle = 0$$

Which is solved in two ways, either $\lambda_j = \lambda_i$ or $\langle \psi_j |   \psi_i \rangle = 0$. The latter of these two shows the orthogonally of the wave functions when $j \neq i$

--- 

## **Problem 3**
The infrared spectrum of $^{75}$Br$^{19}$F consists of an intense line at 380 cm$^{-1}$. Calculate the force constant, $k_f$, of $^{75}$Br$^{19}$F. [6 pts]

<h2>Solution</h2>
Because $^{75}$Br$^{19}$F is a diatomic molecule, we can use the harmonic oscillator approximation to solve the problem. We know that in the harmonic oscillator approximation,

$$\hat{H} = -\frac{\hbar^2}{2 \mu} \frac{d^2}{dx^2} + \frac{1}{2} k_f x^2$$

With $\mu = \frac{m_1 m_2}{m_1 + m_2}$ and $k_f$ is the force constant. 
Solving the Schrodinger equation gives energies:

$$
E = \sqrt{\frac{k_f}{\mu}} \hbar(v + \frac{1}{2})
$$

We set $\omega = \sqrt{\frac{k_f}{\mu}}$. To get $E = \hbar \omega (v + \frac{1}{2})$. Selection rules limit us to $\Delta E = \pm 1$ so 

$$\Delta E = E_1 - E_0 = \hbar \omega \frac{3}{2} - \hbar \omega (\frac{1}{2}) = \hbar \omega$$

We know that photon energy is $E = h \nu = hc \tilde{\nu}$ so we can set these equal to get $h c \tilde{\nu} = \hbar \omega$. Using the definitions of $\hbar$ and $\omega$ we get (after rearranging) 

$$\tilde{\nu} = \frac{1}{2 \pi c} \sqrt{\frac{k_f}{\mu}}$$

We can solve this equation for $k_f$ to get

$$k_f = (2 \pi c \tilde{\nu})^2 \mu$$

From here we can simply plug in the values from the problem. 

$$\mu = \frac{75 \cdot 19}{75 + 19} = \frac{1425}{94}~\text{amu}$$

To get a force constant in N/m we need to covert this to kg $\approx 2.52 \times 10^{-26}$kg

$$\tilde{\nu} = 380 ~\text{cm}^{-1}$$

$$k_f = \left( 2 \pi \cdot (2.99 \times 10^{10}\frac{~\text{cm}}{~\text{s}}) \cdot 380\frac{1}{~\text{cm}} \right)^2 (2.52 \times 10^{-26} ~\text{kg}) \approx 1.29 \times 10^2 \frac{~\text{N}}{~\text{m}} $$

---

## **Problem 4**

A particle of mass $2.00 \times 10^{-26}$ g is in a one-dimensional box of length 4.00nm. Find the frequency and wavelength of the photon emitted when this particle goes from  the n = 3 level to the n = 2 level. [6 pts]

<h2>Solution</h2>
Particle in a box (PIB) has the hamiltonian and solution:

$$\hat{H} = \frac{\hbar^2}{2m \frac{d}{dx}}$$

$$E_n = \frac{h^2 n^2}{8 m a^2}$$

With $n = 1, 2, 3, ...$
To calculate the energy from this transition we need to solve:

$$
\Delta E_{3 \rightarrow 2} = \frac{h^2 3^2}{8 m a^2} -  \frac{h^2 2^2}{8 m a^2} = \frac{h^2} {8 m a^2} \left( 3^2 - 2^2 \right)
$$

We are given m and a in the problem, plugging the in we get

$$\Delta E_{3 \rightarrow 2} = \frac{h^2}{ 8 (2.00 \times 10^{-26} ~\text{g}) (4.00 ~\text{nm})^2} \left( 3^2 - 2^2 \right)$$

$$\Delta E_{3 \rightarrow 2} = 8.58 \times 10^{-22} ~\text{J}$$

Using $E = h\nu$ we can calculate 

$$\nu = \frac{8.58 \times 10^{-22} ~\text{J}}{6.626 \times 10^{-34} ~\text{J s}} = 1.30 \times 10^{12} ~\text{s}^{-1} (~\text{Hz})$$

Then to find the wavelength of the photon we can use 
 
$$\lambda = \frac{c}{\nu} = \frac{2.99 \times 10^8 ~\text{m s}^{-1}}{1.30 \times 10^{12} ~\text{s}^{-1}} = 230 \times 10^{-4} ~\text{m} = 230 ~\text{$\mu$m}$$

---

## **Problem 5**

Derive an expression for the number of translational states for a 3d ideal gas between $\epsilon$ and $\epsilon + \Delta \epsilon$. Approximately how many states are there in a 1\% band around $\epsilon$ (i.e. $\Delta \epsilon = 0.01\epsilon$) if you take $\epsilon = (3/2)kT$, T= 300K, m= 10E-25 kg, and box length a = 0.1m? What does this tell you about the distribution and degeneracy of translational states? [12 pts] 

<h2>Solution</h2>
*I didn't know how to do this problem so my solution follows the corresponding section in our textbook. I tried to explicitly do each step including steps skipped in the derivation presented in McQuarrie.*


We begin the derivation with the 3D particle in a box. The Hamiltonian and Energy values for the problem are 

$$\hat{H} = -\frac{\hbar^2}{2 m} \left( \frac{d}{dx} + \frac{d}{dy} + \frac{d}{dz} \right)$$

$$E_{n_x, n_y, n_z} = \frac{h^2}{8 m a^2} (n_x^2 + n_y^2 +n_z^2)$$

We can recognize that the last term defines a sphere of radius $(n_x^2 + n_y^2 +n_z^2)$ so we can solve the equation for this and call it $R^2$

$$R^2 = \frac{E_{n_x,n_y,n_z} 8 m a^2}{h^2}$$

$$R = \frac{\sqrt{E_{n_x,n_y,n_z} 8 m a^2}}{h}$$

We want to find the number of states between some fixed point $R$ and the origin. For large $R$ we can treat $R$ or $E$ as continuous variables and try to find the number of states between $\epsilon$ and $\epsilon + \Delta\epsilon$. At this point I'm going to match the variables I use in my notes with the variables presented in the problem ($\epsilon_{total} = E_{n_x,n_y,n_z}$). We know that each dimension x, y, z can have either a positive or negative value so we have $2^{d}$ (where d is the number of dimensions) regions of space ($2^3 = 8$). We restrict ourselves to only positive values so we will only look at $\frac{1}{8}$ of our total space. 
We know the volume of a sphere of radius $R$ is $\frac{4 \pi R^3}{3}$ so the volume we are dealing with is 

$$ \frac{1}{8} \left( \frac{4 \pi R^3}{3} \right)$$

We can then plug in our expression for $R$ to get

$$\Phi(\epsilon)= \frac{1}{8} \left( \frac{4 \pi }{3} \right) \left( \left( \frac{E_{n_x,n_y,n_z} 8 m a^2}{h^2}\right)^\frac{1}{2} \right)^3= \frac{\pi}{6} \left( \frac{8 m \epsilon_{total}  a^2}{h^2} \right)^{\frac{3}{2}}$$

Now the number of states between $\epsilon$ and $\epsilon + \Delta \epsilon$ can be calculated using 

$$\omega(\epsilon, \Delta \epsilon) = \Phi(\epsilon + \Delta \epsilon) - \Phi(\epsilon)$$

We can use a Taylor expansion to get

$$\omega(\epsilon, \Delta \epsilon) = \frac{\pi}{4} \left(  \frac{8 m a^2}{h^2} \right)^{3/2} e^{1/2}\cdot \Delta \epsilon{} + \mathcal{O}((\Delta \epsilon)^2)$$

From here, we can simply plug in the values that we were given in the original question to get

$$\omega(\epsilon, 0.01 \epsilon) \approx \frac{\pi}{4} \left(  \frac{8 (10\times 10^{-25}) (0.1)^2}{h^2} \right)^{3/2} (\frac{3}{2}300 k_b)^{1/2} \cdot 0.01( \frac{3}{2} 300 k_b) + \mathcal{O}((\Delta \epsilon)^2)$$

$$\omega(\epsilon, \Delta \epsilon) \approx \frac{\pi}{4} (7.8 \times 10^{76})(6.21 \times 10^{-21})^{1/2} \cdot (6.21 \times 10^{-21}) \approx 3 \times 10^{44}$$

We learned in class that degeneracy increases with available states and with $\mathcal{O}(10^{44})$ states there is an extremely high degeneracy. The states are also disturbed very densely with $\approx 3 \times 10^{44}$ states in a 1\% band of energy. 

--- 

## **Problem 6**
A sample of 325mg of neon occupies 2.00dm$^3$ at 20C. Use the perfect gas law to calculate the pressure. [4 pts]

<h2>Solution</h2>
We know that the ideal gas law (perfect gas law) is $PV = nRT$. We are given $V = 2.00$dm$^3 = 2.00 \times 10^{-3}$m$^3$, $T = 20C = 293.15 K$, and a mass which can be converted to n, number of moles using the atomic mass of Neon (20.18 g/mol) giving $n= \frac{0.32}{20.18} = 0.0161$mol

$$
P = \frac{nRT}{V} = \frac{0.0161 \times 8.314 \times 293.15}{2.00 \times 10^{-3}} = 19.6 \times 10^3 ~\text{Pa}
$$

So our final answer is 19.6kPa

--- 

## **Problem 7**
A sample consisting of 2.00 mol of He is expanded isothermally at 0C from 5.00dm$^3$ to 20.0 dm$^3$

- (a): reversibly  
- (b): against a constant external pressure equal to the final pressure of the gas  
- (c): freely  

For all three processes, calculate q, w, $\Delta$U and $\Delta$H. Assume ideal gas behavior. [12pts]

<h2>Solution</h2>

For an ideal gas at constant temperature, $\Delta U = 0$ and $\Delta H = 0$ for all 3 questions ($\Delta H = \Delta U + \Delta PV$. We already say $\Delta U = 0$ and $PV$ is constant for a fixed $n$ at constant $T$ so $\Delta PT = 0$ )

#### a

$$w_{\text{reversible}} = - n R T \ln \displaystyle{\frac{V_f}{V_i}}$$

$$w_{\text{reversible}} = - 2.0 \times 8.314 \times 273.15 \ln{\frac{20.0}{5.00}} \approx -6.29~\text{kJ}$$

$$q_{\text{reversible}} = -w_{\text{reversible}} = 6.29~\text{kJ}$$


#### b
To solve b, we first have to find the pressure of the final gas.

$$P = \frac{nRT}{V} = \frac{2.0 \times 8.314 \times 273.15}{2.0 \times 10^{-2} m^3} \approx 227 ~\text{kPa}$$

Then we can calculate work using

$$W = -P_{ext}(V_f - V_i) = - 227 (2\times10^{-2} - 5\times10^{-3}) = -3.14 ~\text{kJ}$$

$$q = -w = 3.14 ~\text{kJ}$$

#### c
External pressure is 0 so the work equation becomes:

$$W = -P_{ext}(V_f - V_i) = - 0 (2\times10^{-2} - 5\times10^{-3}) = -0 ~\text{kJ}$$

$$q = -w = 0 ~\text{kJ}$$