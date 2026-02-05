---
section: "Mathematical Methods"
title: "Chapter 10 — Green’s Functions"
---

# Green’s Functions

Green’s functions are a tool to enable the solution of a differential equation containing an **inhomogeneous term** (a *source term*).

This can be an ODE or a PDE, with specified boundary conditions.

---

## Basic Idea

Let $\hat L$ be a **linear differential operator**.

Consider $\hat L$ acting on a function $u(x)$:

$$
\hat L u(x) = f(x)
$$

If we can find a function $G(x,x')$ such that

$$
\hat L\, G(x,x') = \delta(x - x')
$$

then the solution to the original equation is

$$
u(x) = \int_a^b G(x,x') f(x')\,dx'
$$

---

### Checking the Solution

Apply $\hat L$ to $u(x)$:

$$
\hat L u
= \hat L \int_a^b G(x,x') f(x')\,dx'
= \int_a^b \hat L G(x,x') f(x')\,dx'
$$

Using $\hat L G(x,x') = \delta(x-x')$:

$$
\int_a^b \delta(x-x') f(x')\,dx' = f(x)
$$

✔ Works, as long as $x \in [a,b]$.

---

We can now say:

- $G(x,x')$ is the **Green’s function** for $\hat L$
- Its **exact form depends on the boundary conditions**
- $G(x,x')$ may or may not be easy to find, but **once known**, $u(x)$ is easy to compute for any $f(x)$

---

## Analogy: Linear Algebra

Consider the matrix equation

$$
M x = b
$$

- $M$: known square matrix  
- $x$: unknown column vector  
- $b$: known column vector  

If $M^{-1}$ exists:

$$
x = M^{-1} b
$$

This is directly analogous to Green’s functions:

| Linear Algebra | Differential Equations |
|---------------|------------------------|
| $M$ | $\hat L$ |
| $M^{-1}$ | $G(x,x')$ |
| $x$ | $u(x)$ |
| $b$ | $f(x)$ |

---

## Inverse Operators

Consider the action of a linear operator $\hat D$:

$$
\hat D \psi(x) = f(x)
$$

To solve for $\psi(x)$, we would like to know $\hat D^{-1}$:

$$
\psi(x) = \hat D^{-1} f(x)
$$

If $\hat D$ involves derivatives, then $\hat D^{-1}$ involves **integrals**.

---

### Example

Let

$$
\hat D = \frac{d}{dx}, \qquad \psi(x) = 5x^3 + 2x^2
$$

Then

$$
\hat D \psi = 15x^2 + 2x
$$

Working backwards:

$$
\hat D^{-1} f(x) = \int_a^b f(x')\,dx'
$$

The inverse operator requires **extra information** (e.g. constants of integration or boundary conditions).

---

## Integral Representation of Inverse Operators

Assume the inverse operator can be written as

$$
\hat D^{-1} f(x) = \int_a^b D^{-1}(x,x') f(x')\,dx'
$$

- $D^{-1}(x,x')$ is the **kernel**
- The limits of integration are part of the operator
- Changing limits changes the operator

To apply $\hat D^{-1}$, one must know:
- The kernel $D^{-1}(x,x')$
- The limits of integration

---

## Constructing Green’s Functions

### Method 1: Direct Construction

Solve

$$
\hat L G(x,x') = \delta(x-x')
$$

by:
- Solving separately for $x<x'$ and $x>x'$
- Matching solutions at $x=x'$
- Enforcing:
  - Continuity of $G$
  - A jump condition on $G'$ from integrating over the delta function

---

### Method 2: Eigenfunction Expansion

Consider the problem

$$
-\frac{d^2 u}{dx^2} = f(x)
$$

with boundary conditions

$$
\phi_n(0) = \phi_n(L) = 0
$$

Solve the associated eigenvalue problem:

$$
-\phi_n''(x) = \lambda_n \phi_n(x)
$$

Solutions:

$$
\phi_n(x) = \sqrt{\frac{2}{L}} \sin\!\left(\frac{n\pi x}{L}\right), 
\qquad
\lambda_n = \frac{n^2 \pi^2}{L^2}
$$

The Green’s function is

$$
G(x,x') = \sum_{n=1}^\infty \frac{\phi_n(x)\phi_n(x')}{\lambda_n}
$$

---

## Properties of Green’s Functions

- $G(x,x')$ is continuous
- Its **first derivative is discontinuous**
- Often written in piecewise form

Examples:

$$
G(x,x') = |x-x'|
$$

or

$$
G(x,x') = \frac{1}{2}|x-x'|
$$

These have characteristic **kinks** at $x=x'$.

---

## Second-Order Self-Adjoint ODEs

Assume

$$
\hat L u
= \frac{d}{dx}\!\left[p(x)\frac{du}{dx}\right] + q(x)u
= f(x)
$$

Take

$$
G(x,x') =
\begin{cases}
A\,u_1(x)u_2(x') & x<x' \\
A\,u_2(x)u_1(x') & x>x'
\end{cases}
$$

where:
- $u_1, u_2$ satisfy $\hat L u = 0$
- Both satisfy the boundary conditions

The constant

$$
A = \frac{1}{p(x')\,[u_1'(x')u_2(x') - u_1(x')u_2'(x')]}
$$

---

### Example: $-u'' = f(x)$ on $[0,L]$

Here $p=1$, $q=0$.

Choose:
$$
u_1(x) = x, \qquad u_2(x) = L-x
$$

Final Green’s function:

$$
G(x,x') =
\begin{cases}
\dfrac{x(L-x')}{L}, & x<x' \\
\dfrac{x'(L-x)}{L}, & x>x'
\end{cases}
$$

---

## 3D Green’s Function (Electrostatics)

$$
G(\mathbf r_1, \mathbf r_2)
= -\frac{1}{4\pi |\mathbf r_1 - \mathbf r_2|}
$$

Expanded in spherical coordinates:

$$
G(\mathbf r_1, \mathbf r_2)
= \sum_{\ell=0}^\infty \frac{2\ell+1}{4\pi}
\, g_\ell(r_1,r_2)\,
P_\ell(\cos\lambda)
$$

where:
- $\lambda$ is the angle between $\mathbf r_1$ and $\mathbf r_2$
- $P_\ell$ are Legendre polynomials

Radial functions:

$$g_\ell(r_1,r_2)=-\frac{1}{2\ell+1}\frac{r_<^\ell}{r_>^{\ell+1}}$$

with:
- $r_< =$ smaller of $r_1,r_2$
- $r_> =$ larger of $r_1,r_2$

This is the **spherical Green’s function**, useful for problems in $(r,\theta,\phi)$.
