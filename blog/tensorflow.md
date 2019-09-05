# Tensorflow Modules

`tf.keras.layers.Layer`

- Base layer class from which all layers inherit
- Implement methods that perform logic of applying the layer to the input tensor
- Arguments: 
  - `dtype` of layers weights: if none, use type of the input
  - `dynamic` if **eager** (non-static graph)

#### Computational graphs
- Static vs dynamic (eager, like Pytorch)
- operate on tensors
- view models as DAGs
- All comm with external world relies on `tf.Session` and `tf.Placeholder`

#### Tensors
- matrices represented by n-dimensional (multi-dimensional) arrays
  - python type `ndarray`
- notation:
  - capitalize
  - lowercase subscript letters for scalar values within tensor
- tensor addition (element-wise):
![](https://raw.githubusercontent.com/wthexu/vscode-pastes/master/assets/244885ab-8623-20dc-1312-fbd4d6af2b2c.png)
- tensor multiplication (non element-wise)
  - `tensordot(axes=0 if row, else 1 col)` function in numpy
  ![](https://raw.githubusercontent.com/wthexu/vscode-pastes/master/assets/e23313c1-30db-c92e-cbc8-c8f59af4bac8.png)


