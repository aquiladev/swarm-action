# swarm-action
Ethereum Swarm upload action.

<p align="center">
  <img width="400" src="assets/swarm-action.png" alt="swarm action">
</p>

## Inputs
Parameter       |Required   |Description
---             |---        |---
`path`          |Yes        |Directory's path to upload.
`swarmUrl`      |No         |Swarm node url. Default `https://swarm-gateways.net`
`defaultPath`   |No         |Default path for Manifest. Default `index.html`
`verbose`       |No         |Level of verbosity [`false` - quiet, `true` - verbose]. Default `false`

## Outputs

### `hash` - Swarm hash.

## Example usage

```
uses: aquiladev/swarm-action@v1
with:
  path: ./
```