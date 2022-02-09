let indexedEmojis = []; // #TODO move to emojis.js
let i = 0; // #TODO move to emojis.js



// Attribution:  Accessed from https://getemoji.com/ on 2022-02-04.
// Note - deduplicated emoji's on 2022-02-05
const emojis = [
    '😀',
    '😃',
    '😄',
    '😁',
    '😆',
    '😅',
    '😂',
    '🤣',
    '🥲',
    '☺️',
    '😊',
    '😇',
    '🙂',
    '🙃',
    '😉',
    '😌',
    '😍',
    '🥰',
    '😘',
    '😗',
    '😙',
    '😚',
    '😋',
    '😛',
    '😝',
    '😜',
    '🤪',
    '🤨',
    '🧐',
    '🤓',
    '😎',
    '🥸',
    '🤩',
    '🥳',
    '😏',
    '😒',
    '😞',
    '😔',
    '😟',
    '😕',
    '🙁',
    '☹️',
    '😣',
    '😖',
    '😫',
    '😩',
    '🥺',
    '😢',
    '😭',
    '😤',
    '😠',
    '😡',
    '🤬',
    '🤯',
    '😳',
    '🥵',
    '🥶',
    '😱',
    '😨',
    '😰',
    '😥',
    '😓',
    '🤗',
    '🤔',
    '🤭',
    '🤫',
    '🤥',
    '😶',
    '😐',
    '😑',
    '😬',
    '🙄',
    '😯',
    '😦',
    '😧',
    '😮',
    '😲',
    '🥱',
    '😴',
    '🤤',
    '😪',
    '😵',
    '🤐',
    '🥴',
    '🤢',
    '🤮',
    '🤧',
    '😷',
    '🤒',
    '🤕',
    '🤑',
    '🤠',
    '😈',
    '👿',
    '👹',
    '👺',
    '🤡',
    '💩',
    '👻',
    '💀',
    '☠️',
    '👽',
    '👾',
    '🤖',
    '🎃',
    '😺',
    '😸',
    '😹',
    '😻',
    '😼',
    '😽',
    '🙀',
    '😿',
    '😾',
    '👋',
    '🤚',
    '🖐',
    '✋',
    '🖖',
    '👌',
    '🤌',
    '🤏',
    '✌️',
    '🤞',
    '🤟',
    '🤘',
    '🤙',
    '👈',
    '👉',
    '👆',
    '🖕',
    '👇',
    '☝️',
    '👍',
    '👎',
    '✊',
    '👊',
    '🤛',
    '🤜',
    '👏',
    '🙌',
    '👐',
    '🤲',
    '🤝',
    '🙏',
    '✍️',
    '💅',
    '🤳',
    '💪',
    '🦾',
    '🦵',
    '🦿',
    '🦶',
    '👣',
    '👂',
    '🦻',
    '👃',
    '🫀',
    '🫁',
    '🧠',
    '🦷',
    '🦴',
    '👀',
    '👁',
    '👅',
    '👄',
    '💋',
    '🩸',
    '👶',
    '👧',
    '🧒',
    '👦',
    '👩',
    '🧑',
    '👨',
    '👩‍🦱',
    '🧑‍🦱',
    '👨‍🦱',
    '👩‍🦰',
    '🧑‍🦰',
    '👨‍🦰',
    '👱‍♀️',
    '👱',
    '👱‍♂️',
    '👩‍🦳',
    '🧑‍🦳',
    '👨‍🦳',
    '👩‍🦲',
    '🧑‍🦲',
    '👨‍🦲',
    '🧔',
    '👵',
    '🧓',
    '👴',
    '👲',
    '👳‍♀️',
    '👳',
    '👳‍♂️',
    '🧕',
    '👮‍♀️',
    '👮',
    '👮‍♂️',
    '👷‍♀️',
    '👷',
    '👷‍♂️',
    '💂‍♀️',
    '💂',
    '💂‍♂️',
    '🕵️‍♀️',
    '🕵️',
    '🕵️‍♂️',
    '👩‍⚕️',
    '🧑‍⚕️',
    '👨‍⚕️',
    '👩‍🌾',
    '🧑‍🌾',
    '👨‍🌾',
    '👩‍🍳',
    '🧑‍🍳',
    '👨‍🍳',
    '👩‍🎓',
    '🧑‍🎓',
    '👨‍🎓',
    '👩‍🎤',
    '🧑‍🎤',
    '👨‍🎤',
    '👩‍🏫',
    '🧑‍🏫',
    '👨‍🏫',
    '👩‍🏭',
    '🧑‍🏭',
    '👨‍🏭',
    '👩‍💻',
    '🧑‍💻',
    '👨‍💻',
    '👩‍💼',
    '🧑‍💼',
    '👨‍💼',
    '👩‍🔧',
    '🧑‍🔧',
    '👨‍🔧',
    '👩‍🔬',
    '🧑‍🔬',
    '👨‍🔬',
    '👩‍🎨',
    '🧑‍🎨',
    '👨‍🎨',
    '👩‍🚒',
    '🧑‍🚒',
    '👨‍🚒',
    '👩‍✈️',
    '🧑‍✈️',
    '👨‍✈️',
    '👩‍🚀',
    '🧑‍🚀',
    '👨‍🚀',
    '👩‍⚖️',
    '🧑‍⚖️',
    '👨‍⚖️',
    '👰‍♀️',
    '👰',
    '👰‍♂️',
    '🤵‍♀️',
    '🤵',
    '🤵‍♂️',
    '👸',
    '🤴',
    '🥷',
    '🦸‍♀️',
    '🦸',
    '🦸‍♂️',
    '🦹‍♀️',
    '🦹',
    '🦹‍♂️',
    '🤶',
    '🧑‍🎄',
    '🎅',
    '🧙‍♀️',
    '🧙',
    '🧙‍♂️',
    '🧝‍♀️',
    '🧝',
    '🧝‍♂️',
    '🧛‍♀️',
    '🧛',
    '🧛‍♂️',
    '🧟‍♀️',
    '🧟',
    '🧟‍♂️',
    '🧞‍♀️',
    '🧞',
    '🧞‍♂️',
    '🧜‍♀️',
    '🧜',
    '🧜‍♂️',
    '🧚‍♀️',
    '🧚',
    '🧚‍♂️',
    '👼',
    '🤰',
    '🤱',
    '👩‍🍼',
    '🧑‍🍼',
    '👨‍🍼',
    '🙇‍♀️',
    '🙇',
    '🙇‍♂️',
    '💁‍♀️',
    '💁',
    '💁‍♂️',
    '🙅‍♀️',
    '🙅',
    '🙅‍♂️',
    '🙆‍♀️',
    '🙆',
    '🙆‍♂️',
    '🙋‍♀️',
    '🙋',
    '🙋‍♂️',
    '🧏‍♀️',
    '🧏',
    '🧏‍♂️',
    '🤦‍♀️',
    '🤦',
    '🤦‍♂️',
    '🤷‍♀️',
    '🤷',
    '🤷‍♂️',
    '🙎‍♀️',
    '🙎',
    '🙎‍♂️',
    '🙍‍♀️',
    '🙍',
    '🙍‍♂️',
    '💇‍♀️',
    '💇',
    '💇‍♂️',
    '💆‍♀️',
    '💆',
    '💆‍♂️',
    '🧖‍♀️',
    '🧖',
    '🧖‍♂️',
    '💃',
    '🕺',
    '👯‍♀️',
    '👯',
    '👯‍♂️',
    '🕴',
    '👩‍🦽',
    '🧑‍🦽',
    '👨‍🦽',
    '👩‍🦼',
    '🧑‍🦼',
    '👨‍🦼',
    '🚶‍♀️',
    '🚶',
    '🚶‍♂️',
    '👩‍🦯',
    '🧑‍🦯',
    '👨‍🦯',
    '🧎‍♀️',
    '🧎',
    '🧎‍♂️',
    '🏃‍♀️',
    '🏃',
    '🏃‍♂️',
    '🧍‍♀️',
    '🧍',
    '🧍‍♂️',
    '👭',
    '🧑‍🤝‍🧑',
    '👬',
    '👫',
    '👩‍❤️‍👩',
    '💑',
    '👨‍❤️‍👨',
    '👩‍❤️‍👨',
    '👩‍❤️‍💋‍👩',
    '💏',
    '👨‍❤️‍💋‍👨',
    '👩‍❤️‍💋‍👨',
    '👪',
    '👨‍👩‍👦',
    '👨‍👩‍👧',
    '👨‍👩‍👧‍👦',
    '👨‍👩‍👦‍👦',
    '👨‍👩‍👧‍👧',
    '👨‍👨‍👦',
    '👨‍👨‍👧',
    '👨‍👨‍👧‍👦',
    '👨‍👨‍👦‍👦',
    '👨‍👨‍👧‍👧',
    '👩‍👩‍👦',
    '👩‍👩‍👧',
    '👩‍👩‍👧‍👦',
    '👩‍👩‍👦‍👦',
    '👩‍👩‍👧‍👧',
    '👨‍👦',
    '👨‍👦‍👦',
    '👨‍👧',
    '👨‍👧‍👦',
    '👨‍👧‍👧',
    '👩‍👦',
    '👩‍👦‍👦',
    '👩‍👧',
    '👩‍👧‍👦',
    '👩‍👧‍👧',
    '🗣',
    '👤',
    '👥',
    '🫂',
    '🧳',
    '🌂',
    '☂️',
    '🧵',
    '🪡',
    '🪢',
    '🧶',
    '👓',
    '🕶',
    '🥽',
    '🥼',
    '🦺',
    '👔',
    '👕',
    '👖',
    '🧣',
    '🧤',
    '🧥',
    '🧦',
    '👗',
    '👘',
    '🥻',
    '🩴',
    '🩱',
    '🩲',
    '🩳',
    '👙',
    '👚',
    '👛',
    '👜',
    '👝',
    '🎒',
    '👞',
    '👟',
    '🥾',
    '🥿',
    '👠',
    '👡',
    '🩰',
    '👢',
    '👑',
    '👒',
    '🎩',
    '🎓',
    '🧢',
    '⛑',
    '🪖',
    '💄',
    '💍',
    '💼',
    '👋🏻',
    '🤚🏻',
    '🖐🏻',
    '✋🏻',
    '🖖🏻',
    '👌🏻',
    '🤌🏻',
    '🤏🏻',
    '✌🏻',
    '🤞🏻',
    '🤟🏻',
    '🤘🏻',
    '🤙🏻',
    '👈🏻',
    '👉🏻',
    '👆🏻',
    '🖕🏻',
    '👇🏻',
    '☝🏻',
    '👍🏻',
    '👎🏻',
    '✊🏻',
    '👊🏻',
    '🤛🏻',
    '🤜🏻',
    '👏🏻',
    '🙌🏻',
    '👐🏻',
    '🤲🏻',
    '🙏🏻',
    '✍🏻',
    '💅🏻',
    '🤳🏻',
    '💪🏻',
    '🦵🏻',
    '🦶🏻',
    '👂🏻',
    '🦻🏻',
    '👃🏻',
    '👶🏻',
    '👧🏻',
    '🧒🏻',
    '👦🏻',
    '👩🏻',
    '🧑🏻',
    '👨🏻',
    '👩🏻‍🦱',
    '🧑🏻‍🦱',
    '👨🏻‍🦱',
    '👩🏻‍🦰',
    '🧑🏻‍🦰',
    '👨🏻‍🦰',
    '👱🏻‍♀️',
    '👱🏻',
    '👱🏻‍♂️',
    '👩🏻‍🦳',
    '🧑🏻‍🦳',
    '👨🏻‍🦳',
    '👩🏻‍🦲',
    '🧑🏻‍🦲',
    '👨🏻‍🦲',
    '🧔🏻',
    '👵🏻',
    '🧓🏻',
    '👴🏻',
    '👲🏻',
    '👳🏻‍♀️',
    '👳🏻',
    '👳🏻‍♂️',
    '🧕🏻',
    '👮🏻‍♀️',
    '👮🏻',
    '👮🏻‍♂️',
    '👷🏻‍♀️',
    '👷🏻',
    '👷🏻‍♂️',
    '💂🏻‍♀️',
    '💂🏻',
    '💂🏻‍♂️',
    '🕵🏻‍♀️',
    '🕵🏻',
    '🕵🏻‍♂️',
    '👩🏻‍⚕️',
    '🧑🏻‍⚕️',
    '👨🏻‍⚕️',
    '👩🏻‍🌾',
    '🧑🏻‍🌾',
    '👨🏻‍🌾',
    '👩🏻‍🍳',
    '🧑🏻‍🍳',
    '👨🏻‍🍳',
    '👩🏻‍🎓',
    '🧑🏻‍🎓',
    '👨🏻‍🎓',
    '👩🏻‍🎤',
    '🧑🏻‍🎤',
    '👨🏻‍🎤',
    '👩🏻‍🏫',
    '🧑🏻‍🏫',
    '👨🏻‍🏫',
    '👩🏻‍🏭',
    '🧑🏻‍🏭',
    '👨🏻‍🏭',
    '👩🏻‍💻',
    '🧑🏻‍💻',
    '👨🏻‍💻',
    '👩🏻‍💼',
    '🧑🏻‍💼',
    '👨🏻‍💼',
    '👩🏻‍🔧',
    '🧑🏻‍🔧',
    '👨🏻‍🔧',
    '👩🏻‍🔬',
    '🧑🏻‍🔬',
    '👨🏻‍🔬',
    '👩🏻‍🎨',
    '🧑🏻‍🎨',
    '👨🏻‍🎨',
    '👩🏻‍🚒',
    '🧑🏻‍🚒',
    '👨🏻‍🚒',
    '👩🏻‍✈️',
    '🧑🏻‍✈️',
    '👨🏻‍✈️',
    '👩🏻‍🚀',
    '🧑🏻‍🚀',
    '👨🏻‍🚀',
    '👩🏻‍⚖️',
    '🧑🏻‍⚖️',
    '👨🏻‍⚖️',
    '👰🏻‍♀️',
    '👰🏻',
    '👰🏻‍♂️',
    '🤵🏻‍♀️',
    '🤵🏻',
    '🤵🏻‍♂️',
    '👸🏻',
    '🤴🏻',
    '🥷🏻',
    '🦸🏻‍♀️',
    '🦸🏻',
    '🦸🏻‍♂️',
    '🦹🏻‍♀️',
    '🦹🏻',
    '🦹🏻‍♂️',
    '🤶🏻',
    '🧑🏻‍🎄',
    '🎅🏻',
    '🧙🏻‍♀️',
    '🧙🏻',
    '🧙🏻‍♂️',
    '🧝🏻‍♀️',
    '🧝🏻',
    '🧝🏻‍♂️',
    '🧛🏻‍♀️',
    '🧛🏻',
    '🧛🏻‍♂️',
    '🧜🏻‍♀️',
    '🧜🏻',
    '🧜🏻‍♂️',
    '🧚🏻‍♀️',
    '🧚🏻',
    '🧚🏻‍♂️',
    '👼🏻',
    '🤰🏻',
    '🤱🏻',
    '👩🏻‍🍼',
    '🧑🏻‍🍼',
    '👨🏻‍🍼',
    '🙇🏻‍♀️',
    '🙇🏻',
    '🙇🏻‍♂️',
    '💁🏻‍♀️',
    '💁🏻',
    '💁🏻‍♂️',
    '🙅🏻‍♀️',
    '🙅🏻',
    '🙅🏻‍♂️',
    '🙆🏻‍♀️',
    '🙆🏻',
    '🙆🏻‍♂️',
    '🙋🏻‍♀️',
    '🙋🏻',
    '🙋🏻‍♂️',
    '🧏🏻‍♀️',
    '🧏🏻',
    '🧏🏻‍♂️',
    '🤦🏻‍♀️',
    '🤦🏻',
    '🤦🏻‍♂️',
    '🤷🏻‍♀️',
    '🤷🏻',
    '🤷🏻‍♂️',
    '🙎🏻‍♀️',
    '🙎🏻',
    '🙎🏻‍♂️',
    '🙍🏻‍♀️',
    '🙍🏻',
    '🙍🏻‍♂️',
    '💇🏻‍♀️',
    '💇🏻',
    '💇🏻‍♂️',
    '💆🏻‍♀️',
    '💆🏻',
    '💆🏻‍♂️',
    '🧖🏻‍♀️',
    '🧖🏻',
    '🧖🏻‍♂️',
    '💃🏻',
    '🕺🏻',
    '🕴🏻',
    '👩🏻‍🦽',
    '🧑🏻‍🦽',
    '👨🏻‍🦽',
    '👩🏻‍🦼',
    '🧑🏻‍🦼',
    '👨🏻‍🦼',
    '🚶🏻‍♀️',
    '🚶🏻',
    '🚶🏻‍♂️',
    '👩🏻‍🦯',
    '🧑🏻‍🦯',
    '👨🏻‍🦯',
    '🧎🏻‍♀️',
    '🧎🏻',
    '🧎🏻‍♂️',
    '🏃🏻‍♀️',
    '🏃🏻',
    '🏃🏻‍♂️',
    '🧍🏻‍♀️',
    '🧍🏻',
    '🧍🏻‍♂️',
    '👭🏻',
    '🧑🏻‍🤝‍🧑🏻',
    '👬🏻',
    '👫🏻',
    '🧗🏻‍♀️',
    '🧗🏻',
    '🧗🏻‍♂️',
    '🏇🏻',
    '🏂🏻',
    '🏌🏻‍♀️',
    '🏌🏻',
    '🏌🏻‍♂️',
    '🏄🏻‍♀️',
    '🏄🏻',
    '🏄🏻‍♂️',
    '🚣🏻‍♀️',
    '🚣🏻',
    '🚣🏻‍♂️',
    '🏊🏻‍♀️',
    '🏊🏻',
    '🏊🏻‍♂️',
    '⛹🏻‍♀️',
    '⛹🏻',
    '⛹🏻‍♂️',
    '🏋🏻‍♀️',
    '🏋🏻',
    '🏋🏻‍♂️',
    '🚴🏻‍♀️',
    '🚴🏻',
    '🚴🏻‍♂️',
    '🚵🏻‍♀️',
    '🚵🏻',
    '🚵🏻‍♂️',
    '🤸🏻‍♀️',
    '🤸🏻',
    '🤸🏻‍♂️',
    '🤽🏻‍♀️',
    '🤽🏻',
    '🤽🏻‍♂️',
    '🤾🏻‍♀️',
    '🤾🏻',
    '🤾🏻‍♂️',
    '🤹🏻‍♀️',
    '🤹🏻',
    '🤹🏻‍♂️',
    '🧘🏻‍♀️',
    '🧘🏻',
    '🧘🏻‍♂️',
    '🛀🏻',
    '🛌🏻',
    '👋🏼',
    '🤚🏼',
    '🖐🏼',
    '✋🏼',
    '🖖🏼',
    '👌🏼',
    '🤌🏼',
    '🤏🏼',
    '✌🏼',
    '🤞🏼',
    '🤟🏼',
    '🤘🏼',
    '🤙🏼',
    '👈🏼',
    '👉🏼',
    '👆🏼',
    '🖕🏼',
    '👇🏼',
    '☝🏼',
    '👍🏼',
    '👎🏼',
    '✊🏼',
    '👊🏼',
    '🤛🏼',
    '🤜🏼',
    '👏🏼',
    '🙌🏼',
    '👐🏼',
    '🤲🏼',
    '🙏🏼',
    '✍🏼',
    '💅🏼',
    '🤳🏼',
    '💪🏼',
    '🦵🏼',
    '🦶🏼',
    '👂🏼',
    '🦻🏼',
    '👃🏼',
    '👶🏼',
    '👧🏼',
    '🧒🏼',
    '👦🏼',
    '👩🏼',
    '🧑🏼',
    '👨🏼',
    '👩🏼‍🦱',
    '🧑🏼‍🦱',
    '👨🏼‍🦱',
    '👩🏼‍🦰',
    '🧑🏼‍🦰',
    '👨🏼‍🦰',
    '👱🏼‍♀️',
    '👱🏼',
    '👱🏼‍♂️',
    '👩🏼‍🦳',
    '🧑🏼‍🦳',
    '👨🏼‍🦳',
    '👩🏼‍🦲',
    '🧑🏼‍🦲',
    '👨🏼‍🦲',
    '🧔🏼',
    '👵🏼',
    '🧓🏼',
    '👴🏼',
    '👲🏼',
    '👳🏼‍♀️',
    '👳🏼',
    '👳🏼‍♂️',
    '🧕🏼',
    '👮🏼‍♀️',
    '👮🏼',
    '👮🏼‍♂️',
    '👷🏼‍♀️',
    '👷🏼',
    '👷🏼‍♂️',
    '💂🏼‍♀️',
    '💂🏼',
    '💂🏼‍♂️',
    '🕵🏼‍♀️',
    '🕵🏼',
    '🕵🏼‍♂️',
    '👩🏼‍⚕️',
    '🧑🏼‍⚕️',
    '👨🏼‍⚕️',
    '👩🏼‍🌾',
    '🧑🏼‍🌾',
    '👨🏼‍🌾',
    '👩🏼‍🍳',
    '🧑🏼‍🍳',
    '👨🏼‍🍳',
    '👩🏼‍🎓',
    '🧑🏼‍🎓',
    '👨🏼‍🎓',
    '👩🏼‍🎤',
    '🧑🏼‍🎤',
    '👨🏼‍🎤',
    '👩🏼‍🏫',
    '🧑🏼‍🏫',
    '👨🏼‍🏫',
    '👩🏼‍🏭',
    '🧑🏼‍🏭',
    '👨🏼‍🏭',
    '👩🏼‍💻',
    '🧑🏼‍💻',
    '👨🏼‍💻',
    '👩🏼‍💼',
    '🧑🏼‍💼',
    '👨🏼‍💼',
    '👩🏼‍🔧',
    '🧑🏼‍🔧',
    '👨🏼‍🔧',
    '👩🏼‍🔬',
    '🧑🏼‍🔬',
    '👨🏼‍🔬',
    '👩🏼‍🎨',
    '🧑🏼‍🎨',
    '👨🏼‍🎨',
    '👩🏼‍🚒',
    '🧑🏼‍🚒',
    '👨🏼‍🚒',
    '👩🏼‍✈️',
    '🧑🏼‍✈️',
    '👨🏼‍✈️',
    '👩🏼‍🚀',
    '🧑🏼‍🚀',
    '👨🏼‍🚀',
    '👩🏼‍⚖️',
    '🧑🏼‍⚖️',
    '👨🏼‍⚖️',
    '👰🏼‍♀️',
    '👰🏼',
    '👰🏼‍♂️',
    '🤵🏼‍♀️',
    '🤵🏼',
    '🤵🏼‍♂️',
    '👸🏼',
    '🤴🏼',
    '🥷🏼',
    '🦸🏼‍♀️',
    '🦸🏼',
    '🦸🏼‍♂️',
    '🦹🏼‍♀️',
    '🦹🏼',
    '🦹🏼‍♂️',
    '🤶🏼',
    '🧑🏼‍🎄',
    '🎅🏼',
    '🧙🏼‍♀️',
    '🧙🏼',
    '🧙🏼‍♂️',
    '🧝🏼‍♀️',
    '🧝🏼',
    '🧝🏼‍♂️',
    '🧛🏼‍♀️',
    '🧛🏼',
    '🧛🏼‍♂️',
    '🧜🏼‍♀️',
    '🧜🏼',
    '🧜🏼‍♂️',
    '🧚🏼‍♀️',
    '🧚🏼',
    '🧚🏼‍♂️',
    '👼🏼',
    '🤰🏼',
    '🤱🏼',
    '👩🏼‍🍼',
    '🧑🏼‍🍼',
    '👨🏼‍🍼',
    '🙇🏼‍♀️',
    '🙇🏼',
    '🙇🏼‍♂️',
    '💁🏼‍♀️',
    '💁🏼',
    '💁🏼‍♂️',
    '🙅🏼‍♀️',
    '🙅🏼',
    '🙅🏼‍♂️',
    '🙆🏼‍♀️',
    '🙆🏼',
    '🙆🏼‍♂️',
    '🙋🏼‍♀️',
    '🙋🏼',
    '🙋🏼‍♂️',
    '🧏🏼‍♀️',
    '🧏🏼',
    '🧏🏼‍♂️',
    '🤦🏼‍♀️',
    '🤦🏼',
    '🤦🏼‍♂️',
    '🤷🏼‍♀️',
    '🤷🏼',
    '🤷🏼‍♂️',
    '🙎🏼‍♀️',
    '🙎🏼',
    '🙎🏼‍♂️',
    '🙍🏼‍♀️',
    '🙍🏼',
    '🙍🏼‍♂️',
    '💇🏼‍♀️',
    '💇🏼',
    '💇🏼‍♂️',
    '💆🏼‍♀️',
    '💆🏼',
    '💆🏼‍♂️',
    '🧖🏼‍♀️',
    '🧖🏼',
    '🧖🏼‍♂️',
    '💃🏼',
    '🕺🏼',
    '🕴🏼',
    '👩🏼‍🦽',
    '🧑🏼‍🦽',
    '👨🏼‍🦽',
    '👩🏼‍🦼',
    '🧑🏼‍🦼',
    '👨🏼‍🦼',
    '🚶🏼‍♀️',
    '🚶🏼',
    '🚶🏼‍♂️',
    '👩🏼‍🦯',
    '🧑🏼‍🦯',
    '👨🏼‍🦯',
    '🧎🏼‍♀️',
    '🧎🏼',
    '🧎🏼‍♂️',
    '🏃🏼‍♀️',
    '🏃🏼',
    '🏃🏼‍♂️',
    '🧍🏼‍♀️',
    '🧍🏼',
    '🧍🏼‍♂️',
    '👭🏼',
    '🧑🏼‍🤝‍🧑🏼',
    '👬🏼',
    '👫🏼',
    '🧗🏼‍♀️',
    '🧗🏼',
    '🧗🏼‍♂️',
    '🏇🏼',
    '🏂🏼',
    '🏌🏼‍♀️',
    '🏌🏼',
    '🏌🏼‍♂️',
    '🏄🏼‍♀️',
    '🏄🏼',
    '🏄🏼‍♂️',
    '🚣🏼‍♀️',
    '🚣🏼',
    '🚣🏼‍♂️',
    '🏊🏼‍♀️',
    '🏊🏼',
    '🏊🏼‍♂️',
    '⛹🏼‍♀️',
    '⛹🏼',
    '⛹🏼‍♂️',
    '🏋🏼‍♀️',
    '🏋🏼',
    '🏋🏼‍♂️',
    '🚴🏼‍♀️',
    '🚴🏼',
    '🚴🏼‍♂️',
    '🚵🏼‍♀️',
    '🚵🏼',
    '🚵🏼‍♂️',
    '🤸🏼‍♀️',
    '🤸🏼',
    '🤸🏼‍♂️',
    '🤽🏼‍♀️',
    '🤽🏼',
    '🤽🏼‍♂️',
    '🤾🏼‍♀️',
    '🤾🏼',
    '🤾🏼‍♂️',
    '🤹🏼‍♀️',
    '🤹🏼',
    '🤹🏼‍♂️',
    '🧘🏼‍♀️',
    '🧘🏼',
    '🧘🏼‍♂️',
    '🛀🏼',
    '🛌🏼',
    '👋🏽',
    '🤚🏽',
    '🖐🏽',
    '✋🏽',
    '🖖🏽',
    '👌🏽',
    '🤌🏽',
    '🤏🏽',
    '✌🏽',
    '🤞🏽',
    '🤟🏽',
    '🤘🏽',
    '🤙🏽',
    '👈🏽',
    '👉🏽',
    '👆🏽',
    '🖕🏽',
    '👇🏽',
    '☝🏽',
    '👍🏽',
    '👎🏽',
    '✊🏽',
    '👊🏽',
    '🤛🏽',
    '🤜🏽',
    '👏🏽',
    '🙌🏽',
    '👐🏽',
    '🤲🏽',
    '🙏🏽',
    '✍🏽',
    '💅🏽',
    '🤳🏽',
    '💪🏽',
    '🦵🏽',
    '🦶🏽',
    '👂🏽',
    '🦻🏽',
    '👃🏽',
    '👶🏽',
    '👧🏽',
    '🧒🏽',
    '👦🏽',
    '👩🏽',
    '🧑🏽',
    '👨🏽',
    '👩🏽‍🦱',
    '🧑🏽‍🦱',
    '👨🏽‍🦱',
    '👩🏽‍🦰',
    '🧑🏽‍🦰',
    '👨🏽‍🦰',
    '👱🏽‍♀️',
    '👱🏽',
    '👱🏽‍♂️',
    '👩🏽‍🦳',
    '🧑🏽‍🦳',
    '👨🏽‍🦳',
    '👩🏽‍🦲',
    '🧑🏽‍🦲',
    '👨🏽‍🦲',
    '🧔🏽',
    '👵🏽',
    '🧓🏽',
    '👴🏽',
    '👲🏽',
    '👳🏽‍♀️',
    '👳🏽',
    '👳🏽‍♂️',
    '🧕🏽',
    '👮🏽‍♀️',
    '👮🏽',
    '👮🏽‍♂️',
    '👷🏽‍♀️',
    '👷🏽',
    '👷🏽‍♂️',
    '💂🏽‍♀️',
    '💂🏽',
    '💂🏽‍♂️',
    '🕵🏽‍♀️',
    '🕵🏽',
    '🕵🏽‍♂️',
    '👩🏽‍⚕️',
    '🧑🏽‍⚕️',
    '👨🏽‍⚕️',
    '👩🏽‍🌾',
    '🧑🏽‍🌾',
    '👨🏽‍🌾',
    '👩🏽‍🍳',
    '🧑🏽‍🍳',
    '👨🏽‍🍳',
    '👩🏽‍🎓',
    '🧑🏽‍🎓',
    '👨🏽‍🎓',
    '👩🏽‍🎤',
    '🧑🏽‍🎤',
    '👨🏽‍🎤',
    '👩🏽‍🏫',
    '🧑🏽‍🏫',
    '👨🏽‍🏫',
    '👩🏽‍🏭',
    '🧑🏽‍🏭',
    '👨🏽‍🏭',
    '👩🏽‍💻',
    '🧑🏽‍💻',
    '👨🏽‍💻',
    '👩🏽‍💼',
    '🧑🏽‍💼',
    '👨🏽‍💼',
    '👩🏽‍🔧',
    '🧑🏽‍🔧',
    '👨🏽‍🔧',
    '👩🏽‍🔬',
    '🧑🏽‍🔬',
    '👨🏽‍🔬',
    '👩🏽‍🎨',
    '🧑🏽‍🎨',
    '👨🏽‍🎨',
    '👩🏽‍🚒',
    '🧑🏽‍🚒',
    '👨🏽‍🚒',
    '👩🏽‍✈️',
    '🧑🏽‍✈️',
    '👨🏽‍✈️',
    '👩🏽‍🚀',
    '🧑🏽‍🚀',
    '👨🏽‍🚀',
    '👩🏽‍⚖️',
    '🧑🏽‍⚖️',
    '👨🏽‍⚖️',
    '👰🏽‍♀️',
    '👰🏽',
    '👰🏽‍♂️',
    '🤵🏽‍♀️',
    '🤵🏽',
    '🤵🏽‍♂️',
    '👸🏽',
    '🤴🏽',
    '🥷🏽',
    '🦸🏽‍♀️',
    '🦸🏽',
    '🦸🏽‍♂️',
    '🦹🏽‍♀️',
    '🦹🏽',
    '🦹🏽‍♂️',
    '🤶🏽',
    '🧑🏽‍🎄',
    '🎅🏽',
    '🧙🏽‍♀️',
    '🧙🏽',
    '🧙🏽‍♂️',
    '🧝🏽‍♀️',
    '🧝🏽',
    '🧝🏽‍♂️',
    '🧛🏽‍♀️',
    '🧛🏽',
    '🧛🏽‍♂️',
    '🧜🏽‍♀️',
    '🧜🏽',
    '🧜🏽‍♂️',
    '🧚🏽‍♀️',
    '🧚🏽',
    '🧚🏽‍♂️',
    '👼🏽',
    '🤰🏽',
    '🤱🏽',
    '👩🏽‍🍼',
    '🧑🏽‍🍼',
    '👨🏽‍🍼',
    '🙇🏽‍♀️',
    '🙇🏽',
    '🙇🏽‍♂️',
    '💁🏽‍♀️',
    '💁🏽',
    '💁🏽‍♂️',
    '🙅🏽‍♀️',
    '🙅🏽',
    '🙅🏽‍♂️',
    '🙆🏽‍♀️',
    '🙆🏽',
    '🙆🏽‍♂️',
    '🙋🏽‍♀️',
    '🙋🏽',
    '🙋🏽‍♂️',
    '🧏🏽‍♀️',
    '🧏🏽',
    '🧏🏽‍♂️',
    '🤦🏽‍♀️',
    '🤦🏽',
    '🤦🏽‍♂️',
    '🤷🏽‍♀️',
    '🤷🏽',
    '🤷🏽‍♂️',
    '🙎🏽‍♀️',
    '🙎🏽',
    '🙎🏽‍♂️',
    '🙍🏽‍♀️',
    '🙍🏽',
    '🙍🏽‍♂️',
    '💇🏽‍♀️',
    '💇🏽',
    '💇🏽‍♂️',
    '💆🏽‍♀️',
    '💆🏽',
    '💆🏽‍♂️',
    '🧖🏽‍♀️',
    '🧖🏽',
    '🧖🏽‍♂️',
    '💃🏽',
    '🕺🏽',
    '🕴🏽',
    '👩🏽‍🦽',
    '🧑🏽‍🦽',
    '👨🏽‍🦽',
    '👩🏽‍🦼',
    '🧑🏽‍🦼',
    '👨🏽‍🦼',
    '🚶🏽‍♀️',
    '🚶🏽',
    '🚶🏽‍♂️',
    '👩🏽‍🦯',
    '🧑🏽‍🦯',
    '👨🏽‍🦯',
    '🧎🏽‍♀️',
    '🧎🏽',
    '🧎🏽‍♂️',
    '🏃🏽‍♀️',
    '🏃🏽',
    '🏃🏽‍♂️',
    '🧍🏽‍♀️',
    '🧍🏽',
    '🧍🏽‍♂️',
    '👭🏽',
    '🧑🏽‍🤝‍🧑🏽',
    '👬🏽',
    '👫🏽',
    '🧗🏽‍♀️',
    '🧗🏽',
    '🧗🏽‍♂️',
    '🏇🏽',
    '🏂🏽',
    '🏌🏽‍♀️',
    '🏌🏽',
    '🏌🏽‍♂️',
    '🏄🏽‍♀️',
    '🏄🏽',
    '🏄🏽‍♂️',
    '🚣🏽‍♀️',
    '🚣🏽',
    '🚣🏽‍♂️',
    '🏊🏽‍♀️',
    '🏊🏽',
    '🏊🏽‍♂️',
    '⛹🏽‍♀️',
    '⛹🏽',
    '⛹🏽‍♂️',
    '🏋🏽‍♀️',
    '🏋🏽',
    '🏋🏽‍♂️',
    '🚴🏽‍♀️',
    '🚴🏽',
    '🚴🏽‍♂️',
    '🚵🏽‍♀️',
    '🚵🏽',
    '🚵🏽‍♂️',
    '🤸🏽‍♀️',
    '🤸🏽',
    '🤸🏽‍♂️',
    '🤽🏽‍♀️',
    '🤽🏽',
    '🤽🏽‍♂️',
    '🤾🏽‍♀️',
    '🤾🏽',
    '🤾🏽‍♂️',
    '🤹🏽‍♀️',
    '🤹🏽',
    '🤹🏽‍♂️',
    '🧘🏽‍♀️',
    '🧘🏽',
    '🧘🏽‍♂️',
    '🛀🏽',
    '🛌🏽',
    '👋🏾',
    '🤚🏾',
    '🖐🏾',
    '✋🏾',
    '🖖🏾',
    '👌🏾',
    '🤌🏾',
    '🤏🏾',
    '✌🏾',
    '🤞🏾',
    '🤟🏾',
    '🤘🏾',
    '🤙🏾',
    '👈🏾',
    '👉🏾',
    '👆🏾',
    '🖕🏾',
    '👇🏾',
    '☝🏾',
    '👍🏾',
    '👎🏾',
    '✊🏾',
    '👊🏾',
    '🤛🏾',
    '🤜🏾',
    '👏🏾',
    '🙌🏾',
    '👐🏾',
    '🤲🏾',
    '🙏🏾',
    '✍🏾',
    '💅🏾',
    '🤳🏾',
    '💪🏾',
    '🦵🏾',
    '🦶🏾',
    '👂🏾',
    '🦻🏾',
    '👃🏾',
    '👶🏾',
    '👧🏾',
    '🧒🏾',
    '👦🏾',
    '👩🏾',
    '🧑🏾',
    '👨🏾',
    '👩🏾‍🦱',
    '🧑🏾‍🦱',
    '👨🏾‍🦱',
    '👩🏾‍🦰',
    '🧑🏾‍🦰',
    '👨🏾‍🦰',
    '👱🏾‍♀️',
    '👱🏾',
    '👱🏾‍♂️',
    '👩🏾‍🦳',
    '🧑🏾‍🦳',
    '👨🏾‍🦳',
    '👩🏾‍🦲',
    '🧑🏾‍🦲',
    '👨🏾‍🦲',
    '🧔🏾',
    '👵🏾',
    '🧓🏾',
    '👴🏾',
    '👲🏾',
    '👳🏾‍♀️',
    '👳🏾',
    '👳🏾‍♂️',
    '🧕🏾',
    '👮🏾‍♀️',
    '👮🏾',
    '👮🏾‍♂️',
    '👷🏾‍♀️',
    '👷🏾',
    '👷🏾‍♂️',
    '💂🏾‍♀️',
    '💂🏾',
    '💂🏾‍♂️',
    '🕵🏾‍♀️',
    '🕵🏾',
    '🕵🏾‍♂️',
    '👩🏾‍⚕️',
    '🧑🏾‍⚕️',
    '👨🏾‍⚕️',
    '👩🏾‍🌾',
    '🧑🏾‍🌾',
    '👨🏾‍🌾',
    '👩🏾‍🍳',
    '🧑🏾‍🍳',
    '👨🏾‍🍳',
    '👩🏾‍🎓',
    '🧑🏾‍🎓',
    '👨🏾‍🎓',
    '👩🏾‍🎤',
    '🧑🏾‍🎤',
    '👨🏾‍🎤',
    '👩🏾‍🏫',
    '🧑🏾‍🏫',
    '👨🏾‍🏫',
    '👩🏾‍🏭',
    '🧑🏾‍🏭',
    '👨🏾‍🏭',
    '👩🏾‍💻',
    '🧑🏾‍💻',
    '👨🏾‍💻',
    '👩🏾‍💼',
    '🧑🏾‍💼',
    '👨🏾‍💼',
    '👩🏾‍🔧',
    '🧑🏾‍🔧',
    '👨🏾‍🔧',
    '👩🏾‍🔬',
    '🧑🏾‍🔬',
    '👨🏾‍🔬',
    '👩🏾‍🎨',
    '🧑🏾‍🎨',
    '👨🏾‍🎨',
    '👩🏾‍🚒',
    '🧑🏾‍🚒',
    '👨🏾‍🚒',
    '👩🏾‍✈️',
    '🧑🏾‍✈️',
    '👨🏾‍✈️',
    '👩🏾‍🚀',
    '🧑🏾‍🚀',
    '👨🏾‍🚀',
    '👩🏾‍⚖️',
    '🧑🏾‍⚖️',
    '👨🏾‍⚖️',
    '👰🏾‍♀️',
    '👰🏾',
    '👰🏾‍♂️',
    '🤵🏾‍♀️',
    '🤵🏾',
    '🤵🏾‍♂️',
    '👸🏾',
    '🤴🏾',
    '🥷🏾',
    '🦸🏾‍♀️',
    '🦸🏾',
    '🦸🏾‍♂️',
    '🦹🏾‍♀️',
    '🦹🏾',
    '🦹🏾‍♂️',
    '🤶🏾',
    '🧑🏾‍🎄',
    '🎅🏾',
    '🧙🏾‍♀️',
    '🧙🏾',
    '🧙🏾‍♂️',
    '🧝🏾‍♀️',
    '🧝🏾',
    '🧝🏾‍♂️',
    '🧛🏾‍♀️',
    '🧛🏾',
    '🧛🏾‍♂️',
    '🧜🏾‍♀️',
    '🧜🏾',
    '🧜🏾‍♂️',
    '🧚🏾‍♀️',
    '🧚🏾',
    '🧚🏾‍♂️',
    '👼🏾',
    '🤰🏾',
    '🤱🏾',
    '👩🏾‍🍼',
    '🧑🏾‍🍼',
    '👨🏾‍🍼',
    '🙇🏾‍♀️',
    '🙇🏾',
    '🙇🏾‍♂️',
    '💁🏾‍♀️',
    '💁🏾',
    '💁🏾‍♂️',
    '🙅🏾‍♀️',
    '🙅🏾',
    '🙅🏾‍♂️',
    '🙆🏾‍♀️',
    '🙆🏾',
    '🙆🏾‍♂️',
    '🙋🏾‍♀️',
    '🙋🏾',
    '🙋🏾‍♂️',
    '🧏🏾‍♀️',
    '🧏🏾',
    '🧏🏾‍♂️',
    '🤦🏾‍♀️',
    '🤦🏾',
    '🤦🏾‍♂️',
    '🤷🏾‍♀️',
    '🤷🏾',
    '🤷🏾‍♂️',
    '🙎🏾‍♀️',
    '🙎🏾',
    '🙎🏾‍♂️',
    '🙍🏾‍♀️',
    '🙍🏾',
    '🙍🏾‍♂️',
    '💇🏾‍♀️',
    '💇🏾',
    '💇🏾‍♂️',
    '💆🏾‍♀️',
    '💆🏾',
    '💆🏾‍♂️',
    '🧖🏾‍♀️',
    '🧖🏾',
    '🧖🏾‍♂️',
    '💃🏾',
    '🕺🏾',
    '🕴🏿',
    '👩🏾‍🦽',
    '🧑🏾‍🦽',
    '👨🏾‍🦽',
    '👩🏾‍🦼',
    '🧑🏾‍🦼',
    '👨🏾‍🦼',
    '🚶🏾‍♀️',
    '🚶🏾',
    '🚶🏾‍♂️',
    '👩🏾‍🦯',
    '🧑🏾‍🦯',
    '👨🏾‍🦯',
    '🧎🏾‍♀️',
    '🧎🏾',
    '🧎🏾‍♂️',
    '🏃🏾‍♀️',
    '🏃🏾',
    '🏃🏾‍♂️',
    '🧍🏾‍♀️',
    '🧍🏾',
    '🧍🏾‍♂️',
    '👭🏾',
    '🧑🏾‍🤝‍🧑🏾',
    '👬🏾',
    '👫🏾',
    '🧗🏾‍♀️',
    '🧗🏾',
    '🧗🏾‍♂️',
    '🏇🏾',
    '🏂🏾',
    '🏌🏾‍♀️',
    '🏌🏾',
    '🏌🏾‍♂️',
    '🏄🏾‍♀️',
    '🏄🏾',
    '🏄🏾‍♂️',
    '🚣🏾‍♀️',
    '🚣🏾',
    '🚣🏾‍♂️',
    '🏊🏾‍♀️',
    '🏊🏾',
    '🏊🏾‍♂️',
    '⛹🏾‍♀️',
    '⛹🏾',
    '⛹🏾‍♂️',
    '🏋🏾‍♀️',
    '🏋🏾',
    '🏋🏾‍♂️',
    '🚴🏾‍♀️',
    '🚴🏾',
    '🚴🏾‍♂️',
    '🚵🏾‍♀️',
    '🚵🏾',
    '🚵🏾‍♂️',
    '🤸🏾‍♀️',
    '🤸🏾',
    '🤸🏾‍♂️',
    '🤽🏾‍♀️',
    '🤽🏾',
    '🤽🏾‍♂️',
    '🤾🏾‍♀️',
    '🤾🏾',
    '🤾🏾‍♂️',
    '🤹🏾‍♀️',
    '🤹🏾',
    '🤹🏾‍♂️',
    '🧘🏾‍♀️',
    '🧘🏾',
    '🧘🏾‍♂️',
    '🛀🏾',
    '🛌🏾',
    '👋🏿',
    '🤚🏿',
    '🖐🏿',
    '✋🏿',
    '🖖🏿',
    '👌🏿',
    '🤌🏿',
    '🤏🏿',
    '✌🏿',
    '🤞🏿',
    '🤟🏿',
    '🤘🏿',
    '🤙🏿',
    '👈🏿',
    '👉🏿',
    '👆🏿',
    '🖕🏿',
    '👇🏿',
    '☝🏿',
    '👍🏿',
    '👎🏿',
    '✊🏿',
    '👊🏿',
    '🤛🏿',
    '🤜🏿',
    '👏🏿',
    '🙌🏿',
    '👐🏿',
    '🤲🏿',
    '🙏🏿',
    '✍🏿',
    '💅🏿',
    '🤳🏿',
    '💪🏿',
    '🦵🏿',
    '🦶🏿',
    '👂🏿',
    '🦻🏿',
    '👃🏿',
    '👶🏿',
    '👧🏿',
    '🧒🏿',
    '👦🏿',
    '👩🏿',
    '🧑🏿',
    '👨🏿',
    '👩🏿‍🦱',
    '🧑🏿‍🦱',
    '👨🏿‍🦱',
    '👩🏿‍🦰',
    '🧑🏿‍🦰',
    '👨🏿‍🦰',
    '👱🏿‍♀️',
    '👱🏿',
    '👱🏿‍♂️',
    '👩🏿‍🦳',
    '🧑🏿‍🦳',
    '👨🏿‍🦳',
    '👩🏿‍🦲',
    '🧑🏿‍🦲',
    '👨🏿‍🦲',
    '🧔🏿',
    '👵🏿',
    '🧓🏿',
    '👴🏿',
    '👲🏿',
    '👳🏿‍♀️',
    '👳🏿',
    '👳🏿‍♂️',
    '🧕🏿',
    '👮🏿‍♀️',
    '👮🏿',
    '👮🏿‍♂️',
    '👷🏿‍♀️',
    '👷🏿',
    '👷🏿‍♂️',
    '💂🏿‍♀️',
    '💂🏿',
    '💂🏿‍♂️',
    '🕵🏿‍♀️',
    '🕵🏿',
    '🕵🏿‍♂️',
    '👩🏿‍⚕️',
    '🧑🏿‍⚕️',
    '👨🏿‍⚕️',
    '👩🏿‍🌾',
    '🧑🏿‍🌾',
    '👨🏿‍🌾',
    '👩🏿‍🍳',
    '🧑🏿‍🍳',
    '👨🏿‍🍳',
    '👩🏿‍🎓',
    '🧑🏿‍🎓',
    '👨🏿‍🎓',
    '👩🏿‍🎤',
    '🧑🏿‍🎤',
    '👨🏿‍🎤',
    '👩🏿‍🏫',
    '🧑🏿‍🏫',
    '👨🏿‍🏫',
    '👩🏿‍🏭',
    '🧑🏿‍🏭',
    '👨🏿‍🏭',
    '👩🏿‍💻',
    '🧑🏿‍💻',
    '👨🏿‍💻',
    '👩🏿‍💼',
    '🧑🏿‍💼',
    '👨🏿‍💼',
    '👩🏿‍🔧',
    '🧑🏿‍🔧',
    '👨🏿‍🔧',
    '👩🏿‍🔬',
    '🧑🏿‍🔬',
    '👨🏿‍🔬',
    '👩🏿‍🎨',
    '🧑🏿‍🎨',
    '👨🏿‍🎨',
    '👩🏿‍🚒',
    '🧑🏿‍🚒',
    '👨🏿‍🚒',
    '👩🏿‍✈️',
    '🧑🏿‍✈️',
    '👨🏿‍✈️',
    '👩🏿‍🚀',
    '🧑🏿‍🚀',
    '👨🏿‍🚀',
    '👩🏿‍⚖️',
    '🧑🏿‍⚖️',
    '👨🏿‍⚖️',
    '👰🏿‍♀️',
    '👰🏿',
    '👰🏿‍♂️',
    '🤵🏿‍♀️',
    '🤵🏿',
    '🤵🏿‍♂️',
    '👸🏿',
    '🤴🏿',
    '🥷🏿',
    '🦸🏿‍♀️',
    '🦸🏿',
    '🦸🏿‍♂️',
    '🦹🏿‍♀️',
    '🦹🏿',
    '🦹🏿‍♂️',
    '🤶🏿',
    '🧑🏿‍🎄',
    '🎅🏿',
    '🧙🏿‍♀️',
    '🧙🏿',
    '🧙🏿‍♂️',
    '🧝🏿‍♀️',
    '🧝🏿',
    '🧝🏿‍♂️',
    '🧛🏿‍♀️',
    '🧛🏿',
    '🧛🏿‍♂️',
    '🧜🏿‍♀️',
    '🧜🏿',
    '🧜🏿‍♂️',
    '🧚🏿‍♀️',
    '🧚🏿',
    '🧚🏿‍♂️',
    '👼🏿',
    '🤰🏿',
    '🤱🏿',
    '👩🏿‍🍼',
    '🧑🏿‍🍼',
    '👨🏿‍🍼',
    '🙇🏿‍♀️',
    '🙇🏿',
    '🙇🏿‍♂️',
    '💁🏿‍♀️',
    '💁🏿',
    '💁🏿‍♂️',
    '🙅🏿‍♀️',
    '🙅🏿',
    '🙅🏿‍♂️',
    '🙆🏿‍♀️',
    '🙆🏿',
    '🙆🏿‍♂️',
    '🙋🏿‍♀️',
    '🙋🏿',
    '🙋🏿‍♂️',
    '🧏🏿‍♀️',
    '🧏🏿',
    '🧏🏿‍♂️',
    '🤦🏿‍♀️',
    '🤦🏿',
    '🤦🏿‍♂️',
    '🤷🏿‍♀️',
    '🤷🏿',
    '🤷🏿‍♂️',
    '🙎🏿‍♀️',
    '🙎🏿',
    '🙎🏿‍♂️',
    '🙍🏿‍♀️',
    '🙍🏿',
    '🙍🏿‍♂️',
    '💇🏿‍♀️',
    '💇🏿',
    '💇🏿‍♂️',
    '💆🏿‍♀️',
    '💆🏿',
    '💆🏿‍♂️',
    '🧖🏿‍♀️',
    '🧖🏿',
    '🧖🏿‍♂️',
    '💃🏿',
    '🕺🏿',
    '👩🏿‍🦽',
    '🧑🏿‍🦽',
    '👨🏿‍🦽',
    '👩🏿‍🦼',
    '🧑🏿‍🦼',
    '👨🏿‍🦼',
    '🚶🏿‍♀️',
    '🚶🏿',
    '🚶🏿‍♂️',
    '👩🏿‍🦯',
    '🧑🏿‍🦯',
    '👨🏿‍🦯',
    '🧎🏿‍♀️',
    '🧎🏿',
    '🧎🏿‍♂️',
    '🏃🏿‍♀️',
    '🏃🏿',
    '🏃🏿‍♂️',
    '🧍🏿‍♀️',
    '🧍🏿',
    '🧍🏿‍♂️',
    '👭🏿',
    '🧑🏿‍🤝‍🧑🏿',
    '👬🏿',
    '👫🏿',
    '🧗🏿‍♀️',
    '🧗🏿',
    '🧗🏿‍♂️',
    '🏇🏿',
    '🏂🏿',
    '🏌🏿‍♀️',
    '🏌🏿',
    '🏌🏿‍♂️',
    '🏄🏿‍♀️',
    '🏄🏿',
    '🏄🏿‍♂️',
    '🚣🏿‍♀️',
    '🚣🏿',
    '🚣🏿‍♂️',
    '🏊🏿‍♀️',
    '🏊🏿',
    '🏊🏿‍♂️',
    '⛹🏿‍♀️',
    '⛹🏿',
    '⛹🏿‍♂️',
    '🏋🏿‍♀️',
    '🏋🏿',
    '🏋🏿‍♂️',
    '🚴🏿‍♀️',
    '🚴🏿',
    '🚴🏿‍♂️',
    '🚵🏿‍♀️',
    '🚵🏿',
    '🚵🏿‍♂️',
    '🤸🏿‍♀️',
    '🤸🏿',
    '🤸🏿‍♂️',
    '🤽🏿‍♀️',
    '🤽🏿',
    '🤽🏿‍♂️',
    '🤾🏿‍♀️',
    '🤾🏿',
    '🤾🏿‍♂️',
    '🤹🏿‍♀️',
    '🤹🏿',
    '🤹🏿‍♂️',
    '🧘🏿‍♀️',
    '🧘🏿',
    '🧘🏿‍♂️',
    '🛀🏿',
    '🛌🏿',
    '🐶',
    '🐱',
    '🐭',
    '🐹',
    '🐰',
    '🦊',
    '🐻',
    '🐼',
    '🐻‍❄️',
    '🐨',
    '🐯',
    '🦁',
    '🐮',
    '🐷',
    '🐽',
    '🐸',
    '🐵',
    '🙈',
    '🙉',
    '🙊',
    '🐒',
    '🐔',
    '🐧',
    '🐦',
    '🐤',
    '🐣',
    '🐥',
    '🦆',
    '🦅',
    '🦉',
    '🦇',
    '🐺',
    '🐗',
    '🐴',
    '🦄',
    '🐝',
    '🪱',
    '🐛',
    '🦋',
    '🐌',
    '🐞',
    '🐜',
    '🪰',
    '🪲',
    '🪳',
    '🦟',
    '🦗',
    '🕷',
    '🕸',
    '🦂',
    '🐢',
    '🐍',
    '🦎',
    '🦖',
    '🦕',
    '🐙',
    '🦑',
    '🦐',
    '🦞',
    '🦀',
    '🐡',
    '🐠',
    '🐟',
    '🐬',
    '🐳',
    '🐋',
    '🦈',
    '🐊',
    '🐅',
    '🐆',
    '🦓',
    '🦍',
    '🦧',
    '🦣',
    '🐘',
    '🦛',
    '🦏',
    '🐪',
    '🐫',
    '🦒',
    '🦘',
    '🦬',
    '🐃',
    '🐂',
    '🐄',
    '🐎',
    '🐖',
    '🐏',
    '🐑',
    '🦙',
    '🐐',
    '🦌',
    '🐕',
    '🐩',
    '🦮',
    '🐕‍🦺',
    '🐈',
    '🐈‍⬛',
    '🪶',
    '🐓',
    '🦃',
    '🦤',
    '🦚',
    '🦜',
    '🦢',
    '🦩',
    '🕊',
    '🐇',
    '🦝',
    '🦨',
    '🦡',
    '🦫',
    '🦦',
    '🦥',
    '🐁',
    '🐀',
    '🐿',
    '🦔',
    '🐾',
    '🐉',
    '🐲',
    '🌵',
    '🎄',
    '🌲',
    '🌳',
    '🌴',
    '🪵',
    '🌱',
    '🌿',
    '☘️',
    '🍀',
    '🎍',
    '🪴',
    '🎋',
    '🍃',
    '🍂',
    '🍁',
    '🍄',
    '🐚',
    '🪨',
    '🌾',
    '💐',
    '🌷',
    '🌹',
    '🥀',
    '🌺',
    '🌸',
    '🌼',
    '🌻',
    '🌞',
    '🌝',
    '🌛',
    '🌜',
    '🌚',
    '🌕',
    '🌖',
    '🌗',
    '🌘',
    '🌑',
    '🌒',
    '🌓',
    '🌔',
    '🌙',
    '🌎',
    '🌍',
    '🌏',
    '🪐',
    '💫',
    '⭐️',
    '🌟',
    '✨',
    '⚡️',
    '☄️',
    '💥',
    '🔥',
    '🌪',
    '🌈',
    '☀️',
    '🌤',
    '⛅️',
    '🌥',
    '☁️',
    '🌦',
    '🌧',
    '⛈',
    '🌩',
    '🌨',
    '❄️',
    '☃️',
    '⛄️',
    '🌬',
    '💨',
    '💧',
    '💦',
    '☔️',
    '🌊',
    '🌫',
    '🍏',
    '🍎',
    '🍐',
    '🍊',
    '🍋',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🫐',
    '🍈',
    '🍒',
    '🍑',
    '🥭',
    '🍍',
    '🥥',
    '🥝',
    '🍅',
    '🍆',
    '🥑',
    '🥦',
    '🥬',
    '🥒',
    '🌶',
    '🫑',
    '🌽',
    '🥕',
    '🫒',
    '🧄',
    '🧅',
    '🥔',
    '🍠',
    '🥐',
    '🥯',
    '🍞',
    '🥖',
    '🥨',
    '🧀',
    '🥚',
    '🍳',
    '🧈',
    '🥞',
    '🧇',
    '🥓',
    '🥩',
    '🍗',
    '🍖',
    '🌭',
    '🍔',
    '🍟',
    '🍕',
    '🫓',
    '🥪',
    '🥙',
    '🧆',
    '🌮',
    '🌯',
    '🫔',
    '🥗',
    '🥘',
    '🫕',
    '🥫',
    '🍝',
    '🍜',
    '🍲',
    '🍛',
    '🍣',
    '🍱',
    '🥟',
    '🦪',
    '🍤',
    '🍙',
    '🍚',
    '🍘',
    '🍥',
    '🥠',
    '🥮',
    '🍢',
    '🍡',
    '🍧',
    '🍨',
    '🍦',
    '🥧',
    '🧁',
    '🍰',
    '🎂',
    '🍮',
    '🍭',
    '🍬',
    '🍫',
    '🍿',
    '🍩',
    '🍪',
    '🌰',
    '🥜',
    '🍯',
    '🥛',
    '🍼',
    '🫖',
    '☕️',
    '🍵',
    '🧃',
    '🥤',
    '🧋',
    '🍶',
    '🍺',
    '🍻',
    '🥂',
    '🍷',
    '🥃',
    '🍸',
    '🍹',
    '🧉',
    '🍾',
    '🧊',
    '🥄',
    '🍴',
    '🍽',
    '🥣',
    '🥡',
    '🥢',
    '🧂',
    '⚽️',
    '🏀',
    '🏈',
    '🥎',
    '🎾',
    '🏐',
    '🏉',
    '🥏',
    '🎱',
    '🪀',
    '🏓',
    '🏸',
    '🏒',
    '🏑',
    '🥍',
    '🏏',
    '🪃',
    '🥅',
    '⛳️',
    '🪁',
    '🏹',
    '🎣',
    '🤿',
    '🥊',
    '🥋',
    '🎽',
    '🛹',
    '🛼',
    '🛷',
    '⛸',
    '🥌',
    '🎿',
    '⛷',
    '🏂',
    '🪂',
    '🏋️‍♀️',
    '🏋️',
    '🏋️‍♂️',
    '🤼‍♀️',
    '🤼',
    '🤼‍♂️',
    '🤸‍♀️',
    '🤸',
    '🤸‍♂️',
    '⛹️‍♀️',
    '⛹️',
    '⛹️‍♂️',
    '🤺',
    '🤾‍♀️',
    '🤾',
    '🤾‍♂️',
    '🏌️‍♀️',
    '🏌️',
    '🏌️‍♂️',
    '🏇',
    '🧘‍♀️',
    '🧘',
    '🧘‍♂️',
    '🏄‍♀️',
    '🏄',
    '🏄‍♂️',
    '🏊‍♀️',
    '🏊',
    '🏊‍♂️',
    '🤽‍♀️',
    '🤽',
    '🤽‍♂️',
    '🚣‍♀️',
    '🚣',
    '🚣‍♂️',
    '🧗‍♀️',
    '🧗',
    '🧗‍♂️',
    '🚵‍♀️',
    '🚵',
    '🚵‍♂️',
    '🚴‍♀️',
    '🚴',
    '🚴‍♂️',
    '🏆',
    '🥇',
    '🥈',
    '🥉',
    '🏅',
    '🎖',
    '🏵',
    '🎗',
    '🎫',
    '🎟',
    '🎪',
    '🤹',
    '🤹‍♂️',
    '🤹‍♀️',
    '🎭',
    '🎨',
    '🎬',
    '🎤',
    '🎧',
    '🎼',
    '🎹',
    '🥁',
    '🪘',
    '🎷',
    '🎺',
    '🪗',
    '🎸',
    '🪕',
    '🎻',
    '🎲',
    '♟',
    '🎯',
    '🎳',
    '🎮',
    '🎰',
    '🧩',
    '🚗',
    '🚕',
    '🚙',
    '🚌',
    '🚎',
    '🏎',
    '🚓',
    '🚑',
    '🚒',
    '🚐',
    '🛻',
    '🚚',
    '🚛',
    '🚜',
    '🦯',
    '🦽',
    '🦼',
    '🛴',
    '🚲',
    '🛵',
    '🏍',
    '🛺',
    '🚨',
    '🚔',
    '🚍',
    '🚘',
    '🚖',
    '🚡',
    '🚠',
    '🚟',
    '🚃',
    '🚋',
    '🚞',
    '🚝',
    '🚄',
    '🚅',
    '🚈',
    '🚂',
    '🚆',
    '🚇',
    '🚊',
    '🚉',
    '✈️',
    '🛫',
    '🛬',
    '🛩',
    '💺',
    '🛰',
    '🚀',
    '🛸',
    '🚁',
    '🛶',
    '⛵️',
    '🚤',
    '🛥',
    '🛳',
    '⛴',
    '🚢',
    '⚓️',
    '🪝',
    '⛽️',
    '🚧',
    '🚦',
    '🚥',
    '🚏',
    '🗺',
    '🗿',
    '🗽',
    '🗼',
    '🏰',
    '🏯',
    '🏟',
    '🎡',
    '🎢',
    '🎠',
    '⛲️',
    '⛱',
    '🏖',
    '🏝',
    '🏜',
    '🌋',
    '⛰',
    '🏔',
    '🗻',
    '🏕',
    '⛺️',
    '🛖',
    '🏠',
    '🏡',
    '🏘',
    '🏚',
    '🏗',
    '🏭',
    '🏢',
    '🏬',
    '🏣',
    '🏤',
    '🏥',
    '🏦',
    '🏨',
    '🏪',
    '🏫',
    '🏩',
    '💒',
    '🏛',
    '⛪️',
    '🕌',
    '🕍',
    '🛕',
    '🕋',
    '⛩',
    '🛤',
    '🛣',
    '🗾',
    '🎑',
    '🏞',
    '🌅',
    '🌄',
    '🌠',
    '🎇',
    '🎆',
    '🌇',
    '🌆',
    '🏙',
    '🌃',
    '🌌',
    '🌉',
    '🌁',
    '⌚️',
    '📱',
    '📲',
    '💻',
    '⌨️',
    '🖥',
    '🖨',
    '🖱',
    '🖲',
    '🕹',
    '🗜',
    '💽',
    '💾',
    '💿',
    '📀',
    '📼',
    '📷',
    '📸',
    '📹',
    '🎥',
    '📽',
    '🎞',
    '📞',
    '☎️',
    '📟',
    '📠',
    '📺',
    '📻',
    '🎙',
    '🎚',
    '🎛',
    '🧭',
    '⏱',
    '⏲',
    '⏰',
    '🕰',
    '⌛️',
    '⏳',
    '📡',
    '🔋',
    '🔌',
    '💡',
    '🔦',
    '🕯',
    '🪔',
    '🧯',
    '🛢',
    '💸',
    '💵',
    '💴',
    '💶',
    '💷',
    '🪙',
    '💰',
    '💳',
    '💎',
    '⚖️',
    '🪜',
    '🧰',
    '🪛',
    '🔧',
    '🔨',
    '⚒',
    '🛠',
    '⛏',
    '🪚',
    '🔩',
    '⚙️',
    '🪤',
    '🧱',
    '⛓',
    '🧲',
    '🔫',
    '💣',
    '🧨',
    '🪓',
    '🔪',
    '🗡',
    '⚔️',
    '🛡',
    '🚬',
    '⚰️',
    '🪦',
    '⚱️',
    '🏺',
    '🔮',
    '📿',
    '🧿',
    '💈',
    '⚗️',
    '🔭',
    '🔬',
    '🕳',
    '🩹',
    '🩺',
    '💊',
    '💉',
    '🧬',
    '🦠',
    '🧫',
    '🧪',
    '🌡',
    '🧹',
    '🪠',
    '🧺',
    '🧻',
    '🚽',
    '🚰',
    '🚿',
    '🛁',
    '🛀',
    '🧼',
    '🪥',
    '🪒',
    '🧽',
    '🪣',
    '🧴',
    '🛎',
    '🔑',
    '🗝',
    '🚪',
    '🪑',
    '🛋',
    '🛏',
    '🛌',
    '🧸',
    '🪆',
    '🖼',
    '🪞',
    '🪟',
    '🛍',
    '🛒',
    '🎁',
    '🎈',
    '🎏',
    '🎀',
    '🪄',
    '🪅',
    '🎊',
    '🎉',
    '🎎',
    '🏮',
    '🎐',
    '🧧',
    '✉️',
    '📩',
    '📨',
    '📧',
    '💌',
    '📥',
    '📤',
    '📦',
    '🏷',
    '🪧',
    '📪',
    '📫',
    '📬',
    '📭',
    '📮',
    '📯',
    '📜',
    '📃',
    '📄',
    '📑',
    '🧾',
    '📊',
    '📈',
    '📉',
    '🗒',
    '🗓',
    '📆',
    '📅',
    '🗑',
    '📇',
    '🗃',
    '🗳',
    '🗄',
    '📋',
    '📁',
    '📂',
    '🗂',
    '🗞',
    '📰',
    '📓',
    '📔',
    '📒',
    '📕',
    '📗',
    '📘',
    '📙',
    '📚',
    '📖',
    '🔖',
    '🧷',
    '🔗',
    '📎',
    '🖇',
    '📐',
    '📏',
    '🧮',
    '📌',
    '📍',
    '✂️',
    '🖊',
    '🖋',
    '✒️',
    '🖌',
    '🖍',
    '📝',
    '✏️',
    '🔍',
    '🔎',
    '🔏',
    '🔐',
    '🔒',
    '🔓',
    '❤️',
    '🧡',
    '💛',
    '💚',
    '💙',
    '💜',
    '🖤',
    '🤍',
    '🤎',
    '💔',
    '❣️',
    '💕',
    '💞',
    '💓',
    '💗',
    '💖',
    '💘',
    '💝',
    '💟',
    '☮️',
    '✝️',
    '☪️',
    '🕉',
    '☸️',
    '✡️',
    '🔯',
    '🕎',
    '☯️',
    '☦️',
    '🛐',
    '⛎',
    '♈️',
    '♉️',
    '♊️',
    '♋️',
    '♌️',
    '♍️',
    '♎️',
    '♏️',
    '♐️',
    '♑️',
    '♒️',
    '♓️',
    '🆔',
    '⚛️',
    '🉑',
    '☢️',
    '☣️',
    '📴',
    '📳',
    '🈶',
    '🈚️',
    '🈸',
    '🈺',
    '🈷️',
    '✴️',
    '🆚',
    '💮',
    '🉐',
    '㊙️',
    '㊗️',
    '🈴',
    '🈵',
    '🈹',
    '🈲',
    '🅰️',
    '🅱️',
    '🆎',
    '🆑',
    '🅾️',
    '🆘',
    '❌',
    '⭕️',
    '🛑',
    '⛔️',
    '📛',
    '🚫',
    '💯',
    '💢',
    '♨️',
    '🚷',
    '🚯',
    '🚳',
    '🚱',
    '🔞',
    '📵',
    '🚭',
    '❗️',
    '❕',
    '❓',
    '❔',
    '‼️',
    '⁉️',
    '🔅',
    '🔆',
    '〽️',
    '⚠️',
    '🚸',
    '🔱',
    '⚜️',
    '🔰',
    '♻️',
    '✅',
    '🈯️',
    '💹',
    '❇️',
    '✳️',
    '❎',
    '🌐',
    '💠',
    'Ⓜ️',
    '🌀',
    '💤',
    '🏧',
    '🚾',
    '♿️',
    '🅿️',
    '🛗',
    '🈳',
    '🈂️',
    '🛂',
    '🛃',
    '🛄',
    '🛅',
    '🚹',
    '🚺',
    '🚼',
    '⚧',
    '🚻',
    '🚮',
    '🎦',
    '📶',
    '🈁',
    '🔣',
    'ℹ️',
    '🔤',
    '🔡',
    '🔠',
    '🆖',
    '🆗',
    '🆙',
    '🆒',
    '🆕',
    '🆓',
    '0️⃣',
    '1️⃣',
    '2️⃣',
    '3️⃣',
    '4️⃣',
    '5️⃣',
    '6️⃣',
    '7️⃣',
    '8️⃣',
    '9️⃣',
    '🔟',
    '🔢',
    '#️⃣',
    '*️⃣',
    '⏏️',
    '▶️',
    '⏯',
    '⏭',
    '⏮',
    '⏩',
    '⏪',
    '⏫',
    '⏬',
    '◀️',
    '🔼',
    '🔽',
    '➡️',
    '⬅️',
    '⬆️',
    '⬇️',
    '↗️',
    '↘️',
    '↙️',
    '↖️',
    '↕️',
    '↔️',
    '↪️',
    '↩️',
    '⤴️',
    '⤵️',
    '🔀',
    '🔁',
    '🔂',
    '🔄',
    '🔃',
    '🎵',
    '🎶',
    '✖️',
    '♾',
    '💲',
    '💱',
    '™️',
    '©️',
    '®️',
    '〰️',
    '🔚',
    '🔙',
    '🔛',
    '🔝',
    '🔜',
    '✔️',
    '☑️',
    '🔘',
    '🔴',
    '🟠',
    '🟡',
    '🟢',
    '🔵',
    '🟣',
    '⚫️',
    '⚪️',
    '🟤',
    '🔺',
    '🔻',
    '🔸',
    '🔹',
    '🔶',
    '🔷',
    '🔳',
    '🔲',
    '▪️',
    '▫️',
    '◾️',
    '◽️',
    '◼️',
    '◻️',
    '🟥',
    '🟧',
    '🟨',
    '🟩',
    '🟦',
    '🟪',
    '⬛️',
    '⬜️',
    '🟫',
    '🔈',
    '🔇',
    '🔉',
    '🔊',
    '🔔',
    '🔕',
    '📣',
    '📢',
    '👁‍🗨',
    '💬',
    '💭',
    '🗯',
    '♠️',
    '♣️',
    '♥️',
    '♦️',
    '🃏',
    '🎴',
    '🀄️',
    '🕐',
    '🕑',
    '🕒',
    '🕓',
    '🕔',
    '🕕',
    '🕖',
    '🕗',
    '🕘',
    '🕙',
    '🕚',
    '🕛',
    '🕜',
    '🕝',
    '🕞',
    '🕟',
    '🕠',
    '🕡',
    '🕢',
    '🕣',
    '🕤',
    '🕥',
    '🕦',
    '🕧',
    '✢',
    '✣',
    '✤',
    '✥',
    '✦',
    '✧',
    '★',
    '☆',
    '✯',
    '✩',
    '✪',
    '✫',
    '✬',
    '✭',
    '✮',
    '✶',
    '✷',
    '✵',
    '✸',
    '✹',
    '→',
    '⇒',
    '⟹',
    '⇨',
    '⇾',
    '➾',
    '⇢',
    '☛',
    '☞',
    '➔',
    '➜',
    '➙',
    '➛',
    '➝',
    '➞',
    '♤',
    '♧',
    '♡',
    '♢',
    '♚',
    '♛',
    '♜',
    '♝',
    '♞',
    '♔',
    '♕',
    '♖',
    '♗',
    '♘',
    '♙',
    '⚀',
    '⚁',
    '⚂',
    '⚃',
    '⚄',
    '⚅',
    '🂠',
    '⚈',
    '⚉',
    '⚆',
    '⚇',
    '𓀀',
    '𓀁',
    '𓀂',
    '𓀃',
    '𓀄',
    '𓀅',
    '𓀆',
    '𓀇',
    '𓀈',
    '𓀉',
    '𓀊',
    '𓀋',
    '𓀌',
    '𓀍',
    '𓀎',
    '𓀏',
    '𓀐',
    '𓀑',
    '𓀒',
    '𓀓',
    '𓀔',
    '𓀕',
    '𓀖',
    '𓀗',
    '𓀘',
    '𓀙',
    '𓀚',
    '𓀛',
    '𓀜',
    '𓀝🏳️',
    '🏴',
    '🏁',
    '🚩',
    '🏳️‍🌈',
    '🏳️‍⚧️',
    '🏴‍☠️',
    '🦭',
    '😮‍💨',
    '😵‍💫',
    '😶‍🌫️',
    '❤️‍🔥',
    '❤️‍🩹',
    '🧔‍♀️',
    '🧔🏻‍♀️',
    '🧔🏼‍♀️',
    '🧔🏽‍♀️',
    '🧔🏾‍♀️',
    '🧔🏿‍♀️',
    '🧔‍♂️',
    '🧔🏻‍♂️',
    '🧔🏼‍♂️',
    '🧔🏽‍♂️',
    '🧔🏾‍♂️',
    '🧔🏿‍♂️',
    '💑🏻',
    '💑🏼',
    '💑🏽',
    '💑🏾',
    '💑🏿',
    '💏🏻',
    '💏🏼',
    '💏🏽',
    '💏🏾',
    '💏🏿',
    '👨🏻‍❤️‍👨🏻',
    '👨🏻‍❤️‍👨🏼',
    '👨🏻‍❤️‍👨🏽',
    '👨🏻‍❤️‍👨🏾',
    '👨🏻‍❤️‍👨🏿',
    '👨🏼‍❤️‍👨🏻',
    '👨🏼‍❤️‍👨🏼',
    '👨🏼‍❤️‍👨🏽',
    '👨🏼‍❤️‍👨🏾',
    '👨🏼‍❤️‍👨🏿',
    '👨🏽‍❤️‍👨🏻',
    '👨🏽‍❤️‍👨🏼',
    '👨🏽‍❤️‍👨🏽',
    '👨🏽‍❤️‍👨🏾',
    '👨🏽‍❤️‍👨🏿',
    '👨🏾‍❤️‍👨🏻',
    '👨🏾‍❤️‍👨🏼',
    '👨🏾‍❤️‍👨🏽',
    '👨🏾‍❤️‍👨🏾',
    '👨🏾‍❤️‍👨🏿',
    '👨🏿‍❤️‍👨🏻',
    '👨🏿‍❤️‍👨🏼',
    '👨🏿‍❤️‍👨🏽',
    '👨🏿‍❤️‍👨🏾',
    '👨🏿‍❤️‍👨🏿',
    '👩🏻‍❤️‍👨🏻',
    '👩🏻‍❤️‍👨🏼',
    '👩🏻‍❤️‍👨🏽',
    '👩🏻‍❤️‍👨🏾',
    '👩🏻‍❤️‍👨🏿',
    '👩🏻‍❤️‍👩🏻',
    '👩🏻‍❤️‍👩🏼',
    '👩🏻‍❤️‍👩🏽',
    '👩🏻‍❤️‍👩🏾',
    '👩🏻‍❤️‍👩🏿',
    '👩🏼‍❤️‍👨🏻',
    '👩🏼‍❤️‍👨🏼',
    '👩🏼‍❤️‍👨🏽',
    '👩🏼‍❤️‍👨🏾',
    '👩🏼‍❤️‍👨🏿',
    '👩🏼‍❤️‍👩🏻',
    '👩🏼‍❤️‍👩🏼',
    '👩🏼‍❤️‍👩🏽',
    '👩🏼‍❤️‍👩🏾',
    '👩🏼‍❤️‍👩🏿',
    '👩🏽‍❤️‍👨🏻',
    '👩🏽‍❤️‍👨🏼',
    '👩🏽‍❤️‍👨🏽',
    '👩🏽‍❤️‍👨🏾',
    '👩🏽‍❤️‍👨🏿',
    '👩🏽‍❤️‍👩🏻',
    '👩🏽‍❤️‍👩🏼',
    '👩🏽‍❤️‍👩🏽',
    '👩🏽‍❤️‍👩🏾',
    '👩🏽‍❤️‍👩🏿',
    '👩🏾‍❤️‍👨🏻',
    '👩🏾‍❤️‍👨🏼',
    '👩🏾‍❤️‍👨🏽',
    '👩🏾‍❤️‍👨🏾',
    '👩🏾‍❤️‍👨🏿',
    '👩🏾‍❤️‍👩🏻',
    '👩🏾‍❤️‍👩🏼',
    '👩🏾‍❤️‍👩🏽',
    '👩🏾‍❤️‍👩🏾',
    '👩🏾‍❤️‍👩🏿',
    '👩🏿‍❤️‍👨🏻',
    '👩🏿‍❤️‍👨🏼',
    '👩🏿‍❤️‍👨🏽',
    '👩🏿‍❤️‍👨🏾',
    '👩🏿‍❤️‍👨🏿',
    '👩🏿‍❤️‍👩🏻',
    '👩🏿‍❤️‍👩🏼',
    '👩🏿‍❤️‍👩🏽',
    '👩🏿‍❤️‍👩🏾',
    '👩🏿‍❤️‍👩🏿',
    '🧑🏻‍❤️‍🧑🏼',
    '🧑🏻‍❤️‍🧑🏽',
    '🧑🏻‍❤️‍🧑🏾',
    '🧑🏻‍❤️‍🧑🏿',
    '🧑🏼‍❤️‍🧑🏻',
    '🧑🏼‍❤️‍🧑🏽',
    '🧑🏼‍❤️‍🧑🏾',
    '🧑🏼‍❤️‍🧑🏿',
    '🧑🏽‍❤️‍🧑🏻',
    '🧑🏽‍❤️‍🧑🏼',
    '🧑🏽‍❤️‍🧑🏾',
    '🧑🏽‍❤️‍🧑🏿',
    '🧑🏾‍❤️‍🧑🏻',
    '🧑🏾‍❤️‍🧑🏼',
    '🧑🏾‍❤️‍🧑🏽',
    '🧑🏾‍❤️‍🧑🏿',
    '🧑🏿‍❤️‍🧑🏻',
    '🧑🏿‍❤️‍🧑🏼',
    '🧑🏿‍❤️‍🧑🏽',
    '🧑🏿‍❤️‍🧑🏾',
    '👨🏻‍❤️‍💋‍👨🏻',
    '👨🏻‍❤️‍💋‍👨🏼',
    '👨🏻‍❤️‍💋‍👨🏽',
    '👨🏻‍❤️‍💋‍👨🏾',
    '👨🏻‍❤️‍💋‍👨🏿',
    '👨🏼‍❤️‍💋‍👨🏻',
    '👨🏼‍❤️‍💋‍👨🏼',
    '👨🏼‍❤️‍💋‍👨🏽',
    '👨🏼‍❤️‍💋‍👨🏾',
    '👨🏼‍❤️‍💋‍👨🏿',
    '👨🏽‍❤️‍💋‍👨🏻',
    '👨🏽‍❤️‍💋‍👨🏼',
    '👨🏽‍❤️‍💋‍👨🏽',
    '👨🏽‍❤️‍💋‍👨🏾',
    '👨🏽‍❤️‍💋‍👨🏿',
    '👨🏾‍❤️‍💋‍👨🏻',
    '👨🏾‍❤️‍💋‍👨🏼',
    '👨🏾‍❤️‍💋‍👨🏽',
    '👨🏾‍❤️‍💋‍👨🏾',
    '👨🏾‍❤️‍💋‍👨🏿',
    '👨🏿‍❤️‍💋‍👨🏻',
    '👨🏿‍❤️‍💋‍👨🏼',
    '👨🏿‍❤️‍💋‍👨🏽',
    '👨🏿‍❤️‍💋‍👨🏾',
    '👨🏿‍❤️‍💋‍👨🏿',
    '👩🏻‍❤️‍💋‍👨🏻',
    '👩🏻‍❤️‍💋‍👨🏼',
    '👩🏻‍❤️‍💋‍👨🏽',
    '👩🏻‍❤️‍💋‍👨🏾',
    '👩🏻‍❤️‍💋‍👨🏿',
    '👩🏻‍❤️‍💋‍👩🏻',
    '👩🏻‍❤️‍💋‍👩🏼',
    '👩🏻‍❤️‍💋‍👩🏽',
    '👩🏻‍❤️‍💋‍👩🏾',
    '👩🏻‍❤️‍💋‍👩🏿',
    '👩🏼‍❤️‍💋‍👨🏻',
    '👩🏼‍❤️‍💋‍👨🏼',
    '👩🏼‍❤️‍💋‍👨🏽',
    '👩🏼‍❤️‍💋‍👨🏾',
    '👩🏼‍❤️‍💋‍👨🏿',
    '👩🏼‍❤️‍💋‍👩🏻',
    '👩🏼‍❤️‍💋‍👩🏼',
    '👩🏼‍❤️‍💋‍👩🏽',
    '👩🏼‍❤️‍💋‍👩🏾',
    '👩🏼‍❤️‍💋‍👩🏿',
    '👩🏽‍❤️‍💋‍👨🏻',
    '👩🏽‍❤️‍💋‍👨🏼',
    '👩🏽‍❤️‍💋‍👨🏽',
    '👩🏽‍❤️‍💋‍👨🏾',
    '👩🏽‍❤️‍💋‍👨🏿',
    '👩🏽‍❤️‍💋‍👩🏻',
    '👩🏽‍❤️‍💋‍👩🏼',
    '👩🏽‍❤️‍💋‍👩🏽',
    '👩🏽‍❤️‍💋‍👩🏾',
    '👩🏽‍❤️‍💋‍👩🏿',
    '👩🏾‍❤️‍💋‍👨🏻',
    '👩🏾‍❤️‍💋‍👨🏼',
    '👩🏾‍❤️‍💋‍👨🏽',
    '👩🏾‍❤️‍💋‍👨🏾',
    '👩🏾‍❤️‍💋‍👨🏿',
    '👩🏾‍❤️‍💋‍👩🏻',
    '👩🏾‍❤️‍💋‍👩🏼',
    '👩🏾‍❤️‍💋‍👩🏽',
    '👩🏾‍❤️‍💋‍👩🏾',
    '👩🏾‍❤️‍💋‍👩🏿',
    '👩🏿‍❤️‍💋‍👨🏻',
    '👩🏿‍❤️‍💋‍👨🏼',
    '👩🏿‍❤️‍💋‍👨🏽',
    '👩🏿‍❤️‍💋‍👨🏾',
    '👩🏿‍❤️‍💋‍👨🏿',
    '👩🏿‍❤️‍💋‍👩🏻',
    '👩🏿‍❤️‍💋‍👩🏼',
    '👩🏿‍❤️‍💋‍👩🏽',
    '👩🏿‍❤️‍💋‍👩🏾',
    '👩🏿‍❤️‍💋‍👩🏿',
    '🧑🏻‍❤️‍💋‍🧑🏼',
    '🧑🏻‍❤️‍💋‍🧑🏽',
    '🧑🏻‍❤️‍💋‍🧑🏾',
    '🧑🏻‍❤️‍💋‍🧑🏿',
    '🧑🏼‍❤️‍💋‍🧑🏻',
    '🧑🏼‍❤️‍💋‍🧑🏽',
    '🧑🏼‍❤️‍💋‍🧑🏾',
    '🧑🏼‍❤️‍💋‍🧑🏿',
    '🧑🏽‍❤️‍💋‍🧑🏻',
    '🧑🏽‍❤️‍💋‍🧑🏼',
    '🧑🏽‍❤️‍💋‍🧑🏾',
    '🧑🏽‍❤️‍💋‍🧑🏿',
    '🧑🏾‍❤️‍💋‍🧑🏻',
    '🧑🏾‍❤️‍💋‍🧑🏼',
    '🧑🏾‍❤️‍💋‍🧑🏽',
    '🧑🏾‍❤️‍💋‍🧑🏿',
    '🧑🏿‍❤️‍💋‍🧑🏻',
    '🧑🏿‍❤️‍💋‍🧑🏼',
    '🧑🏿‍❤️‍💋‍🧑🏽',
    '🧑🏿‍❤️‍💋‍🧑🏾',
  ];
    
// create an indexed array of emojis from the emoji source array
emojis.forEach(elem => { // #TODO move to emojis.js
    indexedEmojis.push([i++, elem]);
});

// return a randomly picked emoji and remove that emoji from the source array of emojis
function getRandomEmoji() { // #TODO move to emojis.js
    let indexedEmoji = indexedEmojis.splice(Math.floor(Math.random() * indexedEmojis.length), 1)[0];
    return indexedEmoji
};