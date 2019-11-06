const searchObjectKey = require('../searchObjectKey');

test('searchObjectKey', () => {
  const object = {
    key1: {
      key2: true,
      key3: false,
      key4: {
        key5: true,
        key6: true
      }
    }
  };

  expect(searchObjectKey(object, /key2/)).toEqual({ key2: true });
  expect(searchObjectKey(object, /key4/)).toEqual({
    key4: {
      key5: true,
      key6: true
    }
  });

  expect(searchObjectKey(object, /key5/)).toEqual({
    key5: true
  });
  expect(searchObjectKey(object, /key7/)).toBe(undefined);
});
