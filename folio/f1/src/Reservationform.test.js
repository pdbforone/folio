import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReservationForm from "./Components/ReservationForm";

describe("ReservationForm", () => {
  it("renders correctly", () => {
    render(<ReservationForm />);
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByLabelText("Choose time")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of guests")).toBeInTheDocument();
    expect(screen.getByLabelText("Number of wheelchairs")).toBeInTheDocument();
    expect(screen.getByLabelText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Preview Reservation")).toBeInTheDocument();
  });

  it("disables the submit button when the form is invalid", () => {
    render(<ReservationForm />);
    const submitButton = screen.getByText("Preview Reservation");
    expect(submitButton).toBeDisabled();

    const dateInput = screen.getByLabelText("Choose date");
    userEvent.type(dateInput, "2022-04-01");
    expect(submitButton).toBeDisabled();

    const timeSelect = screen.getByLabelText("Choose time");
    userEvent.selectOptions(timeSelect, "1");
    expect(submitButton).toBeDisabled();

    const guestsInput = screen.getByLabelText("Number of guests");
    userEvent.type(guestsInput, "0");
    expect(submitButton).toBeDisabled();

    const wheelchInput = screen.getByLabelText("Number of wheelchairs");
    userEvent.type(wheelchInput, "11");
    expect(submitButton).toBeDisabled();

    userEvent.clear(guestsInput);
    userEvent.type(guestsInput, "2");

    userEvent.clear(wheelchInput);
    userEvent.type(wheelchInput, "0");

    expect(submitButton).not.toBeDisabled();
  });
});
