const url = "https://crm.rhelpers.com/api/v1/leads-public";

export async function addUserData(userData) {
  const response = await fetch(url, {
    method: "POST",
    body: userData,
  });

  return response.json();
}
