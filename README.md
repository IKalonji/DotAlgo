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

  <h3 align="center">dotAlgo</h3>

  <p align="center">
    Developer tool to create, index and resolve human-readable Algorand addresses. 
    <br />
    <a href="https://github.com/IKalonji/DotAlgo/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://youtu.be/GOsnMrG4cBE">View Demo</a>
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



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/IKalonji/DotAlgo/blob/main/README.md)

dotAglo is a human-readable domain creator, indexer and resolver for Algorand accounts built for developers to easily integrate into their applications.
Making it easier for users to use the address domain extenstions instead of long and unreadable account addresses.

Here's why:
* Simple to remember, on the go. 
* Address domains are created as NFT's which will enable trade of these domains
* One call address resolution.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Algorand JAVA SDK](https://developer.algorand.org/docs/sdks/java/)
* [JAVA](https://www.java.com)
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
Create domain name asset (NFT)
Resolve domain name
Update domain name
Get all domains

ADDITIONAL ENDPOINTS WILL BE PROVIDED FOR ALPHA RELEASE

[Video Demo](https://www.youtube.com/watch?v=GOsnMrG4cBE)

[![DEMO](https://img.youtube/vi/GOsnMrG4cBE/0.jpg)](https://www.youtube.com/watch?v=GOsnMrG4cBE)


_Please refer to the [Documentation](https://github.com/IKalonji/DotAlgo/blob/main/README.md)_

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ROADMAP -->
## Roadmap

- [ ] Add transferrability
- [ ] Add manager change support
- [ ] Add multiple Algorand account support
- [ ] Deploy to mainnet
- [ ] Add Smart Contract for royalty support

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
[product-screenshot]: images/dotalgo-screenshot.png
