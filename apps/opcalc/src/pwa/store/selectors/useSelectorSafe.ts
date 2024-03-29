import { useSelector } from "react-redux";
import { type Optional } from "opc-types/lib/util/Optional";
import { fallback } from "../../../utils/Data";
import { type Store } from "opc-types/lib/store/Store";

function useSelectorSafe<Value>(
  fn: (optimisticObj: Required<Store>) => Optional<Value>,
  defaultVal: Value
): Value;

function useSelectorSafe<Value>(
  fn: (optimisticObj: Required<Store>) => Optional<Value>,
  defaultVal?: undefined
): Value | undefined;

function useSelectorSafe<Value>(
  fn: (optimisticObj: Required<Store>) => Optional<Value>,
  defaultVal?: Value
) {
  return useSelector(
    defaultVal !== undefined
      ? fallback<Store, Value>(fn, defaultVal)
      : fallback<Store, Value | undefined>(fn, undefined)
  );
}

export default useSelectorSafe;
