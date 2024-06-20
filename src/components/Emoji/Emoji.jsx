import React from 'react';

import meh from '../../assets/emojis/meh.png';
import notSatisfied from '../../assets/emojis/not_satisfied.png';
import mediumSatisfied from '../../assets/emojis/medium_satisfied.png';
import satisfied from '../../assets/emojis/satisfied.png';
import loveIt from '../../assets/emojis/love_it.png';

const Emoji = ({ type, title }) => {
  const emojiMap = {
    meh,
    notSatisfied,
    mediumSatisfied,
    satisfied,
    loveIt,
  };
  return (
    <>
      <img src={emojiMap[type]} alt={type} className="w-[64px] h-[64px]" />
      <p className="text-[0.70rem]">{title}</p>
    </>
  );
};

export default Emoji;
