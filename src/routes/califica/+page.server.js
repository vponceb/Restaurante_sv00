import { redirect } from "@sveltejs/kit";

export const load = ({ cookies }) => {
	if (cookies.get("Respondida")) {
		throw redirect(307, "./agradecimiento");
	}
};

// document.cookie = "Respondida=SI; max-age=60; path=/"
