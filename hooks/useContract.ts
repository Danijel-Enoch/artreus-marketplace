import { useState, useEffect } from "react";
import { useAppContext } from "../contexts/AppContext";
import {
  ArtreusMarketplace,
  ArtreusMarketplace__factory,
} from "../contract-types";
import { CAD_TEST_ADDRESS } from "../config/constants";

export default function useContract() {
  const app = useAppContext();

  const [contract, setContract] = useState<ArtreusMarketplace | undefined>();

  useEffect(() => {
    if (app.provider) {
      const instance = ArtreusMarketplace__factory.connect(
        CAD_TEST_ADDRESS,
        app.provider
      );

      setContract(instance);
    } else {
      setContract(undefined);
    }
  }, [app]);

  return contract;
}
