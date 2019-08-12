# Neural Network Learning Rules

## Perceptron Learning
‘n’ number of finite input vectors, x(n), along with its desired/target output vector t(n), where n = 1 to N.

Output ‘y’ can be calculated on the basis of the net input

Activation function being applied over that net input can be expressed as follows −

$$y\:=\:f(y_{in})\:=\:\begin{cases}1, & y_{in}\:>\:\theta \\0, & y_{in}\:\leqslant\:\theta\end{cases}$$

where θ is threshold.

The updating of weight can be done in the following two cases −

Case I − when t ≠ y, then

$$w(new)\:=\:w(old)\:+\;tx$$

Case II − when t = y, then
$$\text{no change}$$

## Widrow - Hoff (delta)
i.e. Least Mean Square (LMS) method to minimize error across all training patterns

Supervised algo with continuous activation function

#### Basic concept
Delta rule updates the synaptic weights so as to minimize the net input to the output unit and the target value.

#### Updating the synaptic weights
Delta rule is given by

$$\Delta w_{i}\:=\:\alpha\:.x_{i}.e_{j}$$

Here $\Delta w_{i}$ = weight change for ith ⁡pattern;

$\alpha$ = the positive and constant learning rate;

$x_{i}$ = the input value from pre-synaptic neuron;

$e_{j}$ = $(t\:-\:y_{in})$, the difference between the desired/target output and the actual output ⁡$y_{in}$

The above delta rule is for a single output unit only.

The updating of weight can be done in the following two cases −

Case-I − when t ≠ y, then

$$w(new)\:=\:w(old)\:+\:\Delta w$$

Case-II − when t = y, then
$$\text{no change}$$