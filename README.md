<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/IKalonji/DotAlgo">
    <img src="images/dotAlgo.png" alt="Logo" width="120" height="120">
  </a>

  <h3 align="center">dotAlgo-DID</h3>

  <p align="center">
    Decentralized identity using Soulbound tokens (non-tranferrable tokens) on the Algorand blockchain, with IPFS metadata storage. 
    <br />
    <a href="https://github.com/IKalonji/DotAlgo/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/7WY9UFRaUEM">View Demo</a>
    ·
    <a href="https://github.com/IKalonji/DotAlgo/issues">Report Bug</a>
    ·
    <a href="https://github.com/IKalonji/DotAlgo/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## ARC

Read the ARC [here](https://github.com/IKalonji/DotAlgo/blob/main/ARC.md)

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://github.com/IKalonji/DotAlgo/blob/main/README.md) -->

dotAglo-DID is a human-readable domain creator linked to a Soulbound non-transferable Identity token. The goal is to allow users to self identify and have their identity linked to the NFT. Users can then use the Soulbound token to identify or authenticate themselves in other dapps. 

The NFT's are stored in the user wallet and linked to a human readable domain which can be used for resolution.

Here's why:
* Simple to remember, on the go. 
* Linked wallet Soulbound token.
* One call address resolution and identity resolution.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Algorand JAVA SDK](https://developer.algorand.org/docs/sdks/java/)
* [JAVA](https://www.java.com)
* [Web3Storage](https://web3.storage/)
* [Angular](https://angular.io/)
* [Algorand Sandbox](https://github.com/algorand/sandbox)
* [IntelliJ Community](https://www.jetbrains.com/idea/download/)
* [Postman](https://www.postman.com/)
* [Maven](https://maven.apache.org/)

<p align="right">(<a href="#top">back to top</a>)</p>

### Notice

1. This project is not audited and should not be used in a production environment.
2. The project was build on Windows and has not been tested on any Linux distro, but it should run since the tools used are cross platform. 

<!-- GETTING STARTED -->
## Getting Started

Follow the steps below on how to run the project.

### Prerequisites

Please install the below required software in order to run the project.

* Algorand Sandbox
  [Sandbox](https://github.com/algorand/sandbox)

* Java 11
  [Java](https://www.java.com)

* Angular
  ```sh
  npm install -g @angular/cli
  ```

* Maven
  [Maven](https://maven.apache.org/)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/IKalonji/DotAlgo.git
   ```
2. Run the Algorand Sandbox in testnet
   ```sh
   ./sandbox up testnet
   ```
3. Open the za.co.dotalgo server build and run. (KEEP THE SERVER RUNNING)
   ```sh
   run with IntelliJ
   ```
4. Run the Angular client to interact with the backend.
   ```sh
   cd dot-algo-demo-frontend
   ng serve --open
   ```
4. Start creating or importing test account and create your dotAlgo readable addresses, remember to fund test addresses.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

### Endpoints
Create account
Create Soulbound asset (NFT)
Resolve domain name


ADDITIONAL ENDPOINTS WILL BE PROVIDED FOR ALPHA RELEASE

[Video Demo](https://www.youtube.com/watch?v=7WY9UFRaUEM)

[![DEMO](https://img.youtube.com/vi/7WY9UFRaUEM/0.jpg)](https://youtu.be/7WY9UFRaUEM)


_Please refer to the [Documentation](https://github.com/IKalonji/DotAlgo/blob/main/README.md)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Add multiple Algorand account support
- [ ] Deploy to mainnet

See the [open issues](https://github.com/IKalonji/DotAlgo/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Issa Kalonji - [@ISSDawg](https://twitter.com/ISSDawg) - ikalonji@student.wethinkcode.co.za

Project Link: [https://github.com/IKalonji/DotAlgo](https://github.com/IKalonji/DotAlgo)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Algorand](https://www.algorand.com/)
* [Gitcoin](https://gitcoin.co/)
* [Web3Storage](https://web3.storage/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/IKalonji/mbongo_algorand_wallet.svg?style=for-the-badge
[contributors-url]: https://github.com/IKalonji/DotAlgo/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/IKalonji/mbongo_algorand_wallet.svg?style=for-the-badge
[forks-url]: https://github.com/IKalonji/DotAlgo/network/members
[stars-shield]: https://img.shields.io/github/stars/IKalonji/mbongo_algorand_wallet.svg?style=for-the-badge
[stars-url]: https://github.com/IKalonji/DotAlgo/stargazers
[issues-shield]: https://img.shields.io/github/issues/IKalonji/mbongo_algorand_wallet.svg?style=for-the-badge
[issues-url]: https://github.com/IKalonji/DotAlgo/issues
[license-shield]: https://img.shields.io/github/license/IKalonji/mbongo_algorand_wallet.svg?style=for-the-badge
[license-url]: https://github.com/IKalonji/DotAlgo/blob/main/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/issa-kalonji-b301851ba/
[product-screenshot]: https://img.youtube.com/vi/7WY9UFRaUEM/0.jpg
