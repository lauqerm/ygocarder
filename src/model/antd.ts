import { Checkbox } from 'antd';

export type CheckboxChangeEvent = Parameters<NonNullable<React.ComponentProps<typeof Checkbox>['onChange']>>[0];