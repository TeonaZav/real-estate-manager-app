import styled from "styled-components";
import Select from "react-select";

export const SSelect = styled(Select).attrs(({ $hasError }) => ({
  styles: {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      height: "4.2rem",
      borderRadius: "0.6rem",

      border: `1px solid ${
        $hasError
          ? "var(--clr-error)"
          : state.isFocused
          ? "var(--clr-secondary) !important"
          : "var(--clr-secondary) !important"
      }`,

      boxShadow: "none",
      fontSize: "1.6rem",
      fontWeight: 400,
      cursor: "pointer",
      "&:hover": {
        border: `1px solid ${
          $hasError ? "var(--clr-error)" : "var(--clr-secondary)"
        }`,
      },
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      svg: {
        fill: "var(--clr-dark)",
      },
    }),
    menu: (provided) => ({
      ...provided,
      color: "var(--clr-text-primary)",
      fontWeight: 400,
      borderRadius: "0.6rem",
      boxShadow: "none",
      border: "1px solid var(--clr-secondary)",
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      maxHeight: "20.7rem",
    }),
    option: (provided) => ({
      ...provided,
      padding: "1.15rem",
      fontSize: "1.4rem",
      borderBottom: "1px solid var(--clr-secondary)",
      backgroundColor: "transparent",
      color: "inherit",
      cursor: "pointer",
    }),
  },
}))``;

export const SButtonAdd = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1.15rem;
  font-size: 1.4rem;
  border-bottom: 1px solid var(--clr-secondary);
  background-color: transparent;
  color: inherit;
  cursor: pointer;
`;
