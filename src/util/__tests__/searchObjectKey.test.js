import { test, expect } from 'vitest';

import { searchObjectKey } from '../searchObjectKey';

test('searchObjectKey', () => {
  const object = {
    key1: {
      key2: true,
      key3: false,
      key4: {
        key5: true,
        key6: true,
      },
    },
  };

  expect(searchObjectKey(object, /key2/)).toStrictEqual({ key2: true });
  expect(searchObjectKey(object, /key4/)).toStrictEqual({
    key4: {
      key5: true,
      key6: true,
    },
  });

  expect(searchObjectKey(object, /key5/)).toStrictEqual({
    key5: true,
  });
  expect(searchObjectKey(object, /key7/)).toBeUndefined();
});
