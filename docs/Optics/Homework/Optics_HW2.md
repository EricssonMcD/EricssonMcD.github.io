---
title: "Homework 2"
---
**Staring with Faraday's Law in the Frequency domain, derive Helmholtz's equation for $\vec{E}$ defining all new quantities that you introduce (e.g.$\vec{k}$) and also any simplifying assumptions that you need to make to arrive at this equation.**

Helmholtz's equation:

$$
\nabla^2 \vec{E} + k^2 \vec{E} = 0
$$

## Solution:
Beginning with Faradays Law in the frequency domain:

$$
\nabla \times \tilde{E} = -i \omega \tilde{B}
$$

We can take the curl of both sides:

$$
\nabla \times [\nabla \times \tilde{E}] = \nabla \times [-i \omega \tilde{B}]
$$

Working on the left hand side we can use the vector triple product to get:

$$
\nabla(\nabla \cdot \tilde{E}) - \nabla^2 \tilde{E} = \nabla \times [-i \omega \tilde{B}]
$$

Using the same assumptions we made in class $\rho = 0$  and $\vec{J} = 0$ allows us set  $\nabla \cdot \tilde{E} = 0$  We can then see that the diivergence of 0 is 0 making the entire first term vanish leaving 

$$
-\nabla^2 \tilde{E} = \nabla \times [-i \omega \tilde{B}]
$$

i and $\omega$ can be brought out of the cross product and we are left with 

$$-\nabla^2 \tilde{E} = i \omega[\nabla \times \tilde{B}]$$ 

we know that

$$
\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \vec{E}
$$

So inputting this results in 

$$
-\nabla^2 \tilde{E} = i \omega[\mu_0 \vec{J} + \mu_0 \epsilon_0 \vec{E}]
$$

With the assumptions made earlier, $\vec{J} = 0$ so that term vanishes leaving

$$
-\nabla^2 \tilde{E} = i \omega[\ \mu_0 \epsilon_0 \vec{E}]
$$

We can subtract the right hand side from both sides of the equation and then multiply by -1 to reach:

$$
\nabla^2 \tilde{E} + i \omega[\ \mu_0 \epsilon_0 \vec{E}] = 0
$$

Then, finally, to reach the desired form we set the constants in the second term equal to another constant, $k^2$ which means 

$$ k = \sqrt{i \omega \mu_0 \epsilon_0}$$ 

leaving us with the desired result. 

$$
\nabla^2 \tilde{E} + k^2 \tilde{E} = 0
$$
