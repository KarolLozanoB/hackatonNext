//usamos como referencia el código que hicimos en clase de internacionalización el de los maullidos

type FormularioProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Formulario({ searchParams }: FormularioProps) {
  const params = await searchParams;
  const username = (params.username as string) || "";
  const fullname = (params.fullname as string) || "";
  const age = (params.age as string) || "";

  return (
    <main style={{ display: "flex", gap: "100px", padding: "20px" }}>
      <form>
        <p>Username:</p>
        <input name="username" style={{ background: 'white', color: 'black' }} />
        <p>FullName:</p>
        <input name="fullname" style={{ background: 'white', color: 'black' }} />
        <p>Age:</p>
        <input name="age" style={{ background: 'white', color: 'black' }} />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <ul>
        <li>UserName: {username.toUpperCase()}</li>
        <li>FullName: {fullname.toUpperCase()}</li>
        <li>Age: {age}</li>
      </ul>
    </main>
  );
}