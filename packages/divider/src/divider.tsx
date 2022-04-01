/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
*/

import {  defineComponent } from 'vue';
import {  PropTypes } from '@bkui-vue/shared';

export default defineComponent({
  name: 'Divider',
  props: {
    direction: PropTypes.commonType(['horizontal', 'vertical'], 'direction').def('horizontal'),
    align: PropTypes.commonType(['left', 'center', 'right'], 'align').def('center'),
    color: PropTypes.string.def('#dde4eb'),
    width: PropTypes.number.def(1),
    type: PropTypes.commonType(['dashed', 'solid'], 'lineType').def('dashed'),
  },
  render() {
    const styles = () => {
      if (this.direction === 'vertical') {
        return {
          borderRight: `${this.width}px ${this.type} ${this.color}`,
        };
      }
      return {
        borderBottom: `${this.width}px ${this.type} ${this.color}`,
      };
    };
    let slots;
    if (this.$slots.default) {
      slots = <div class={['bk-divider-info', `bk-divider-info-${this.align}`]}>{this.$slots.default()}</div>;
    }

    return (
      <div class={['bk-divider', `bk-divider-${this.direction}`]} style={styles()}>
        {slots}
      </div>
    );
  },
});