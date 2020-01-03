import { useState, useEffect } from "react";

export default function usePromise(
  promiseCreator: Function,
  deps: React.DependencyList | undefined // useEffect의 deps If present, effect will only activate if the values in the list change.
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [resolved, setResolved] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const process = async () => {
      setLoading(true);
      try {
        const resolved = await promiseCreator();
        setResolved(resolved);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    process();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [loading, resolved, error];
}
