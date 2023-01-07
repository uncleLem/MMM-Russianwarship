# MagicMirrorModule-Russianwarship

[MagicMirror Project on GitHub](https://github.com/MichMich/MagicMirror) | [russianwarship.rip](https://russianwarship.rip)

The total losses of the russian occupier since the full scale invasion in Ukraine, per General Staff of the Armed Forces of Ukraine.

## Usage

To use this module, go to the *modules* subfolder of your mirror and clone this repository.
Go into `MMM-Russianwarship` folder
Run `npm install`

### Configuration

To run the module, you need to add the following data to your config.js file.

```
{
  module: 'MMM-Russianwarship',
  position: 'top_left'
}
```
### Options

You may want to set the following options in the config section as well:

| Option           | Description                                                     | Default value |
|------------------|-----------------------------------------------------------------|---------------|
| `display`        | Description elements to be displayed: `icon`, `text`, or `both` | `both`        |
| `updateInterval` | Refresh interval (minutes)                                      | 60            |
| `stats`          | Either `all` or `personnel`                                     | `all`         |

### Help Ukraine

Help Ukrainian effort by donating to [comebackalive.in.ua](https://www.comebackalive.in.ua/donate)

![image](img/qr-code.svg)
