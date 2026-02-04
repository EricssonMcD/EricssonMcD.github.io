---
section: "Statistical Mechanics Homework"
title: "Homework 1"
---

## Problem 1
Three moles (3.00 mol) of a perfect gas at 200 K are compressed reversibly and adiabatically until its temperature reaches 250 K. Given that

$$ C_{V,m} = 27.5 \ \text{J K}^{-1}\text{ mol}^{-1}$$

calculate:

- $q$  
- $\Delta S$
- $\Delta U$
- $w$
- $\Delta H$

**[10 pts]**

### Solution

The question states that the compression is adiabatic meaning $q = 0$, this combined with the face that it is reversible means that $\Delta S = 0$ as well. All we are left to find is $\Delta U$, $\Delta H$ and $w$.

#### Delta U

$$
\left( \frac{\partial U}{\partial T} \right)_V = n C_{V, m} \rightarrow \partial U = n C_{V,m} \partial T
$$

Integrating both sides of the equation we get

$$
\int d U = n C_{V,m} \int dT \rightarrow  [U_2 - U_1] = n C_{V,m}[T_2 - T_1]
$$

Which we can then use with the given values in the problem to arrive at

$$
\Delta U = (3.00 mol)(27.5 J mol^{-1} K^{-1})(250K-200K) = 4125 J
$$

#### Delta H

$$
H = U + PV \rightarrow dH = dU + d[PV] 
$$

We can differentiate the ideal gas law to get $d[PV] = nR dT$ which we can then plug into the above equation for $d[PV]$ to get

$$
dH = dU + nR dT
$$

Then we can plug in our definition for $dU$ found in the previous part

$$
dH = n C_{V,m} dT + nR dT \rightarrow n(C_{V,m}+R)(dT)
$$

Now we can integrate both sides to get

$$
H_2 - H_1 = n R C_{V,m} [T_2 - T_1] 
$$

We can plug in the given values for $T_1$, $T_2$ and $C_{V,m}$ to get

$$
\Delta H = (3.00 mol)(27.5 J mol^{-1} K^{-1} + 8.314 J mol^{-1} K^{-1})(250 K - 200 K) = 5371.2 J
$$

#### w

From the first law of thermodynamics we know $\Delta U = q + w$ this can be rearranged to $w = \Delta U - q$ and we know because this is an adiabatic problem $q = 0$ so we have 

$$
W = \Delta U = 4125 J
$$

The combined answers for the problem are:

\[
\boxed{q = 0, \Delta S = 0, \Delta U = 4125 J , \Delta H = 5371.2 J, w =  4125 J}
\]

---

## Problem 2
Show that the differential \( dV \) of the volume of an ideal gas is an exact differential.  

**[8 pts]**

### Solution

$PV = nRT \rightarrow V = \frac{nRT}{P}$

$$
dV = \left( \frac{\partial V}{\partial T} \right)_P dT + \left( \frac{\partial V}{\partial P} \right)_T dP
$$

A differential $dF = M dx + Ndy$ is exact if the formula $\frac{d M}{d y} = \frac{d N}{d x}$. Looking at our equation we can set $\frac{\partial V}{\partial T} = M$, $x = T$, $\frac{\partial V}{\partial T} = N$, $y = P$. 

$$
\frac{ \left( \frac{\partial V}{\partial T} \right)_P}{dP} = \frac{ \left( \frac{\partial V}{\partial P} \right)_T}{d T} \longrightarrow 0=0 
$$

---

## Problem 3
Derive the Maxwell relation that comes from the differential of the Gibbs energy, \( dG \).  

**[8 pts]**

### Solution:
We know that $dG = Vdp - SdT$. With the natural variables P and T. This means that $G = G(P,T)$ We can take the total differential of G with respect to each using the definition of a derivative of a function with two variables which results in 

$$dG = \left( \frac{\partial G}{\partial P} \right)_T dP - \left( \frac{\partial G}{\partial T} \right)_P dT$$

We can compare this to the original differential and to get the results

$$\left( \frac{\partial G}{\partial P} \right)_T = V$$

$$\left( \frac{\partial G}{\partial T} \right)_P = -S$$

---

## Problem 4
Consider the following differential form:


$$df = (3ax^2y)\,dx + (ax^3 + 2by)\,dy$$


Integrate \( df \) along **Path 1** $(0,0) \rightarrow (2,0) \rightarrow (2,2)$ and **Path 2** $(0,0) \rightarrow (0,2) \rightarrow (2,2)$
Is \( df \) an exact differential?

**[10 pts]**

### Solution
#### Path 1 Step 1
$y = 0$, $dy = 0$

$$df = [3Ax^3 (0)] 2 + [Ax^3 + 2B(0)](0) = 0$$ 

#### Path 1, Step 2
$x = 2$, $dx = 0$

$$df = [3A(2)^2](0) + (A(2^3) + 2By)dy$$

$$\int_0^2 (A(2^3) + 2By)dy \rightarrow [8A + 2By^2]_0^2 = 16A + 4B$$

Total Path = Step 1 + Step 2

$$0 + (16A + 4B)$$

#### Path 2 Step 1
$x = 0$, $dx = 0$

$$df = [3A(0)^2 y](0) + [A(0)^3 + 2By]dy$$

$$\int_0^2  [2By]dy = [By^2]^2_0 = 4B$$

#### Path 2, Step 2
$y = 2$, $dy = 0$

$$df = [3Ax^3 (2)] dx + [Ax^3 + 2B(2)](0)$$ 

$$\int_0^2  [6 Ax^3] dx + [Ax^3 + 2B(2)](0) = [6Ax^3]_0^3 = 16A$$

Total Path = Step 1 + Step 2

$$(4B)+ (16A)$$


**The solutions for integration along paths 1 and 2 were the same so $df$ is an exact differential**

---

## Problem 5
The digits 1 to 4 appear in the sequence of 20 events as: 11121332443321123444

with equal *a priori* probability.

1. Calculate the multiplicity \( \Omega(n) \) for the distribution.
2. Use the Boltzmann formula to calculate the entropy in two ways: 

$$S = k_B \ln \Omega$$

- **(a)** exactly using factorials in the formula for \( \Omega \)
- **(b)** using Stirling’s approximation for \( \ln \Omega \)

**[10 pts]**

### Solution
1 appears six times, 2 appears 4 times, 3 five times, 4 five times. 

#### B

$$\Omega(n) = \frac{20!}{6!4!5!5!} = \frac{2.432902008 \times 10^{18}}{(720)(24)(120)(120)} = 9.777287519 \times 10^9$$

$$\ln{\Omega} = 23.00332793$$

$$S = k_b \cdot 23.00332793 = (1.380 \times 10^{-23})(23.00332793) = 3.17595217 \times 10^{-22}$$

#### B

Stirling's approximation is beneficial for large N where computing the actual factorial would be difficult. For small, manageable factorials the approximation is not only unnecessary, but it is not as good of an approximation as large N. Because of this, I only used the approximation for $20!$ and computed each of the denominator factorials using the actual definition.

Stirling's approximation allows us to find $\ln{\Omega}$ . We can use starlings approximation and exponentiation to get $\Omega$

$$\ln{N!} \approx  N \ln{N} - N \longrightarrow \ln{20!} \approx 20 \ln{20} - 20 = 39.91464547$$

We have the same denominator, $(720)(24)(120)(120) = 2.4883 \times 10^8$.

$$\Omega = \frac{\exp{39.91464547}}{ 2.4883 \times 10^8} = \frac{2.16127622 \times 10^{17}}{2.4883 \times 10^8} = 8.685684401 \times 10^8$$

$$S = k_b \ln{\Omega} = 1.380649 \times 10^{-23} \ln{8.685684401 \times 10^8} = 2.69762455 \times 10^{-22}$$

**I was concerned that there may be some error introduces in the exponentiation of $\ln{N!}_{approx}$ so I tried it a second way as well.**

$$S = k_b  \ln{\Omega} = k_b \ln{\frac{N!}{n_1! n_2! n_3! n_4!}} = k_b (\ln{N!} - \ln{[n_1! n_2! n_3! n_4!]})$$

In this equation, $\ln{N!}$ is directly what we approximated so using this value directly will remove any floating point introduced errors in the calculation. 

$$S = 1.380649 \times 10^{-23} (39.91464547 - 19.33228853 = 2.84170105 \times 10^{-22}$$

Adding the extra exponentiation term allowed me to present a value for $\Omega$ but it produced an error of $\approx15.06\%$ when compared to directly calculating the factorial . Skipping this extra step on a calculator gave an error of $\approx10.52 \%$ when compared to the direct factorial computation.

---

## Problem 6
Find the value of \( N_1 \) that maximizes:


$$f(N_1) = \frac{N!}{N_1!(N - N_1)!}$$


Proceed by assuming large, continuous variables and utilizing Stirling’s approximation.

**[8 pts]**

### Solution

To maximize $f(N_1)$, we need $\frac{d f(N_1)}{d N_1} = 0$.  $f(N_1)$ contains lots of factorials so we use Stirling's approximation to handle these more easily, to do so it will help to get our equation in terms of $\ln{X}!$

$$f(N_1) = \frac{N!}{N_1!(N - N_1)!} \rightarrow \ln{f(N_1)} = \ln{\frac{N!}{N_1! (N-N_1)!}} \rightarrow \ln{N!} - [\ln{N_1!}+\ln{(N-N_1)!}]$$

We can now use Stirling’s approximation, $\ln{N!} \approx N\ln{N}-N$, to get.

$$\ln{f(N_1)} = \left[ N\ln{N} - N\right] - \left[\left( N_1 \ln{N_1} - N_1 \right) + \left( [N-N_1] \ln{(N-N_1)} - [N-N_1]\right) \right]$$

We have in the first two terms $-N$ and $+N_1$, in the third term we have $+N - N_1$ so all of these cancel leaving

$$\ln{f(N_1)} = \left[ N\ln{N}\right] - \left[\left( N_1 \ln{N_1}  \right) + \left( [N-N_1] \ln{(N-N_1)} \right) \right]$$

Now we can take $\frac{d}{dN_1}$. The first term has no $N_1$ terms so it vanishes, the last two terms give

$$\frac{d \ln{f(N_1)}}{dN_1} = [-\ln{N_1} -1] + [\ln{(N-N_1)} + 1]$$

To find the maximum, we set this equal to zero and solve for $N_1$

$$[-\ln{N_1} -1] + [\ln{(N-N_1)} + 1] = 0 \longrightarrow \ln{\frac{N-N_1}{N_1}} = 0$$

We can use exponentiation to remove the $\ln$ on the left and using $\exp{[0]} = 1$ we get

$$\frac{N-N_1}{N_1} = 1 \rightarrow N-N_1 = N_1 \rightarrow N = 2N_1 \rightarrow N_1 = \frac{N}{2}$$


\[
\boxed{f(N_1) \text{ is maximized under the condition } N_1 = \frac{N}{2}}
\]
