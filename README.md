# POKEBİN 
Pokebin is an open-source Pastebin software written in node.js, which is easily installable in any network.  
It bases upon [hastebinplus](https://github.com/MarvinMenzerath/HastebinPlus) and got enhanced in matters of **Privacy, Speed and Simplicity** lol

## Features
* Syntax-Highlighting
* Add static documents
* Duplicate & edit pastes
* Raw paste-view

## Installation
 
1. Install Git and node.js: `sudo apt-get install git nodejs`
2. Clone this repository: `git clone https://github.com/ashpotter/pokebin/pokebin.git pokebin`
3. Open `config.json` and change the settings (if you want to)
4. Install dependencies: `npm install`
5. Start the application: `npm start`

## Update
1. Pull changes from this repository: `git pull`
2. Install new dependencies: `npm install`

## Settings
| Key                    | Description                                     | Default value |
| ---------------------- | ----------------------------------------------- | ------------- |
| `host`                 | The host the server runs on                     | `0.0.0.0`     |
| `port`                 | The port the server runs on                     | `8080`        |
| `dataPath`             | The directory where all pastes are stored       | `./data`      |
| `keyLength`            | The length of the pastes' key                   | `10`          |
| `maxLength`            | Maximum chars in a paste                        | `500000`      |
| `createKey`            | Needs to be in front of paste to allow creation | ` `           |
| `documents`            | Static documents to serve                       |      |

### Da Config
```json
{
	"host": "0.0.0.0",
	"port": 8080,
	"dataPath": "./data",
	"keyLength": 10,
	"maxLength": 500000,
	"createKey": "",
	"documents": {
		"about": "./README.md",
 	}
}
```

## Authors n stuff
* [haste](https://github.com/seejohnrun/haste-server): John Crepezzi - MIT License
* [hastebinplus](https://github.com/MarvinMenzerath/HastebinPlus): Marvin Menzerath - MIT License
* [jQuery](https://github.com/jquery/jquery): MIT License
* [highlight.js](https://github.com/isagalaev/highlight.js): Ivan Sagalaev - [License](https://github.com/isagalaev/highlight.js/blob/master/LICENSE)
* [Application Icon](https://www.iconfinder.com/icons/285631/notepad_icon): [Paomedia](https://www.iconfinder.com/paomedia) - [CC BY 3.0 License](http://creativecommons.org/licenses/by/3.0/)

## [LEGAL](https://github.com/iamashley0/pokebin/tree/main/legal)
