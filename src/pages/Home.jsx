import { ActionPanel, RealEstateList } from "../components";
import FilterChips from "../components/listingActions/FilterChips/FilterChips";

const Home = () => {
  return (
    <>
      <ActionPanel />
      <FilterChips />
      <RealEstateList />
    </>
  );
};
export default Home;
