# Bad `instanceof` in nodejs

## Conclusion

Use =instanceof= only on core classes that provided by node itself, ex: Array, Buffer, EventEmmiter, TypeError, etc.

## Reason

node/npm provides a powerfull dependencies management system, but that make the packages that we use actually are different object in context, just like different classes in java that loaded by different classLoader.

So if you use instanceof to check objects that not provide by node, there will be a great chance that some thing wrong after the package get updated.

Equal or Strict equal are the same.

