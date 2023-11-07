import { useState, useEffect } from "react";
import * as Yup from "yup";

export default function useWeightValidationSchema(
    updateSuccessMessage, session
) {
    const [validationSchema, setValidationSchema] = useState(null);

    useEffect(() => {
        setValidationSchema(
            Yup.object().shape({
                date: Yup.date().required("Date is required"),
                weight: Yup.number()
                    .min(51,"Please enter a weight above 50lbs")
                    .max(1499, "Please enter a weight below 1499lbs"),
            })
        );

        updateSuccessMessage("");
    }, [session.user.id, updateSuccessMessage]);

    return { validationSchema };
}
