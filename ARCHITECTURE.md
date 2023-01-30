# Architecture

Every component in doke is a output-ful component that can generate output. Input and output can be any type, but can be matched up together in order to process different information in a graph-like structure.

Inputful Components can also have "solvers" attatched to them that allow parameters to be guessed in order to solve the output -- these solvers rely on frequency analysis and other techniques to guess the parameters, and can be paired up with custom settings (the default is English).

## Viewers

In doke, there are three viewers:

### Categorial-Based

This is the one that is similar to the likes of [dcode.fr](https://dcode.fr), and group tools in a categorial manner. This is the default viewer, and is useful for basic usage as well as finding tools through search engines.

### Graph-Based

This is the one that is similar to the likes of [CyberChef](https://gchq.github.io/CyberChef/), and group tools in a graph-like manner. This is useful for more advanced usage, as it allows for complex workflows to be created.

### Script-Based

With this, you can create your own scripts to run in doke in TypeScript. This allows for very complex workflows, while exposing the standard library to the uesr.
