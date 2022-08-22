ARC: 707
TITLE: Algorand Standard Asset for Non-transferable Soulbound Non Fungible Tokens
STATUS: Work in progress
---

# Algorand Standard Asset Parameters Conventions for Non Transferable Soulbound NFTs

## Summary

This is a basic introductions proposal for standards for the implementation of Non transferable Soulbound NFTs


## Abstract

A Soulbound NFT introduces a new concept to the NFT landscape by providing an implementation of tokens which are non-transferable by nature and would seek to serve the 
role of an identifier for individuals or organisations. Making use of Souldbound NFTs would allow for identities, certifications and any other piece of information which needs to be individually tied to exist.

## Specification

The key words "**MUST**", "**MUST NOT**", "**REQUIRED**", "**SHALL**", "**SHALL NOT**", "**SHOULD**", "**SHOULD NOT**", "**RECOMMENDED**", "**MAY**", and "**OPTIONAL**" in this document are to be interpreted as described in [RFC-2119](https://www.ietf.org/rfc/rfc2119.txt).

### ASA Parameters Conventions

The ASA parameters should follow the conventions for pure non-fungible tokens as described in [ARC-0003](https://arc.algorand.foundation/ARCs/arc-0003) except for the following parameters:

* *Manager Address* (`m`): **MUST** be set to issuing soul address to establish provenance.
* *Default Frozen* (`df`): **MUST** be _True_ to freeze holdings for the asset by default.
* *Freeze Address* (`f`): **MUST** be set to `""` or empty, to indicate that unfreezing is not permitted.

* Clawback Address:
  * *Clawback Address* (`c`) **Should** be set to Manager Address in the case where the Issuing soul is not the holder.
    OR
  * *Clawback Address* (`c`) **Must** be set to Manager Address in the case where the Issuing soul is holder e.g Self Sovereign Identity.


## Rationale

For a token to be described as Soulbound, it must be meet the following criteria:
1. Publicly verifiable
2. Non-fungible
3. Non-transferable

The Algorand blockchain provides the means for publicly verifiable transactions. The [ARC-0003](https://arc.algorand.foundation/ARCs/arc-0003) sets the conventions for creating non-fungible tokens. To make NFTs non-transferable, thereby becoming soulbound, the asset _Manager Address_, _Default Frozen_, and _Freeze Address_ parameters must be modified as specified above.

## References

**Standards**
- [ARC-0003 Algorand Standard Asset Parameters Conventions for Fungible and Non-Fungible Tokens](https://arc.algorand.foundation/ARCs/arc-0003)
- [RFC 2119 Key words for use in RFCs to Indicate Requirement Levels](https://www.ietf.org/rfc/rfc2119.txt)

**Articles & Discussions**
- [Decentralized Society: Finding Web3's Soul](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763)
- [Soulbound](https://vitalik.eth.limo/general/2022/01/26/soulbound.html)
- [What are Soulbound Tokens](https://dev.to/envoy_/what-are-soulbound-tokens-14lj)