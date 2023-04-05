import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Prototype1.module.css';

interface Props {
  className?: string;
}
/* @figmaId 18:249 */
export const Prototype1: FC<Props> = memo(function Prototype1(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.toleranceCrop1}></div>
      <div className={classes.inAWorldWhereYouCanBeAnythingB}>
        <div className={classes.textBlock}>In a world where you can be anything,</div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>be </span>
            <span className={classes.label2}>tolerant</span>
            <span className={classes.label3}>.</span>
          </p>
        </div>
      </div>
      <div className={classes.t}>T</div>
      <div className={classes.o}>O</div>
      <div className={classes.l}>L</div>
      <div className={classes.e}>E</div>
      <div className={classes.r}>R</div>
      <div className={classes.a}>A</div>
      <div className={classes.n}>N</div>
      <div className={classes.c}>C</div>
      <div className={classes.e2}>E</div>
      <div className={classes.t2}>T</div>
      <div className={classes.o2}>O</div>
      <div className={classes.l2}>L</div>
      <div className={classes.e3}>E</div>
      <div className={classes.r2}>R</div>
      <div className={classes.a2}>A</div>
      <div className={classes.n2}>N</div>
      <div className={classes.c2}>C</div>
      <div className={classes.e4}>E</div>
    </div>
  );
});
