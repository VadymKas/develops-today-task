const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

async function getVehicleTypes() {
  const data = await fetch(`${apiUrl}/GetMakesForVehicleType/car?format=json`)
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching vehicle types:', error));

  return data;
}

async function generateStaticParams(makeId, year) {
  const data = await fetch(
    `${apiUrl}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`,
  )
    .then((response) => response.json())
    .catch((error) => console.error('Error fetching model from year:', error));

  return data;
}

export { getVehicleTypes, generateStaticParams };
