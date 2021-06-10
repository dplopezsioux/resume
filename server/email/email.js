const htmlMes = (email, mens) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <title>Confirmation of Email</title>
  </head>
  <body
    class="d-flex h-100 text-center text-darck expansion-alids-init"
  >
    <div class="container">
      <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <div>
            <h3 class="float-md-start mb-0">Email Confirmation</h3>
         
            </nav>
          </div>
        </header>

        <main class="px-3">
          <h1>Notification </h1>
          <p class="lead">
            The email has been received!
          </p>
          <p class="lead">
            <p
              class="btn btn-lg btn-secondary fw-bold border-darck bg-darck"
              >I will answer you as soon as possible to ${email} </p
            >
          </p>
          <p>
          
          <h5>Your Message "${mens}"</h5>
          </p>
          
        </main>

        <footer class="mt-auto text-darck-50">
          <p>
            
            <a href="https://www.dpinformation.me/" class="text-darck"
            >email Sent by D@NIEL</a
            >
          </p>
        </footer>
      </div>
    </div>
  </body>
</html>

    `;
};

module.exports = htmlMes;
