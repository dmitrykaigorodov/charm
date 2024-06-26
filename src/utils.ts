import { type Charm } from "./charm";

export type CharmSetter<Value> = (value: Value) => void;

export const charmSetter = <Value>(charm: Charm<Value>): CharmSetter<Value> => {
  return (value: Value) => charm.set(value);
};

export type CharmGetter<Value> = () => Value;
export const charmGetter = <Value>(charm: Charm<Value>): CharmGetter<Value> => {
  return () => charm.get();
};

/**
 * Extracts @param value of source charm to the value of derived charm
 * 
 * @see {@link } and @see {@link arrayEltCharm} for usage examples.
 */
export type GetFromSourceFn<SourceValue, DerivedValue> = (
  value: SourceValue,
) => DerivedValue;

/**
 * 
 * next value of derived charm @param nextDerivedValue
 * and previous value of source charm @param prevSourceValue.
 * When creating read-only derived charms then use @see {@link NeverSet}.
 * When derived charm is not read-only then setting derived charm 
 * will also update the sourceCharm
 * @return next Value of source based on 
 */
export type SetToSourceFn<SourceValue, DerivedValue> = (
  nextDerivedValue: DerivedValue,
  prevSourceValue: SourceValue,
) => SourceValue;
