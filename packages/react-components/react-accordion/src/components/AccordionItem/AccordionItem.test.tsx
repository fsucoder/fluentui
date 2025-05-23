import * as React from 'react';
import { AccordionItem } from './AccordionItem';
import * as renderer from 'react-test-renderer';
import { isConformant } from '../../common/isConformant';

describe('AccordionItem', () => {
  isConformant({
    Component: AccordionItem,
    displayName: 'AccordionItem',
    // Accordion does not have own styles
    disabledTests: ['make-styles-overrides-win', 'component-has-static-classname-exported'],
  });

  /**
   * Note: see more visual regression tests for AccordionItem in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const component = renderer.create(<AccordionItem value={0}>Default AccordionItem</AccordionItem>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
