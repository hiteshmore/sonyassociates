# Sony Associates — Static Website

A responsive, framework-free static website for **Sony Associates**.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript
- SVG logo
- No build step
- No external JavaScript dependencies

## GitHub Pages deployment

### Option A — easiest

1. Create a new GitHub repository, for example `sony-associates`.
2. Upload **the contents of this folder** to the repository root (so `index.html` is at the root).
3. Commit to the `main` branch.
4. Open **Settings → Pages** in the repository.
5. Under **Build and deployment**, choose **GitHub Actions** if it is not already selected.
6. The included workflow `.github/workflows/pages.yml` will deploy the site automatically.
7. After deployment, GitHub will show the Pages URL, normally in the form:
   `https://YOUR-USERNAME.github.io/sony-associates/`

### Option B — repository named YOUR-USERNAME.github.io

If you want the shorter URL:

`https://YOUR-USERNAME.github.io/`

create the repository using your GitHub username followed by `.github.io`, then upload these files to its root.

## Client-review checklist

Before production hosting, verify and replace any placeholder/reference business information, including:

- office address
- telephone/mobile numbers
- email address
- GSTIN/legal entity information
- lender/mandate statements
- branch/coverage claims
- company registration details
- all service descriptions and business claims

The current visual content was prepared as a design/reference build and should be treated as unverified until the client confirms the business details.

## Custom domain later

Once the client approves the content, a custom domain can be connected through **Settings → Pages → Custom domain**. Add the required DNS records at the domain registrar, enable HTTPS, and keep the GitHub Pages deployment as the publishing source.

## Local preview

Because this is a plain static site, you can open `index.html` directly in a browser for a basic preview. For a closer production-like preview, use any simple local static server.


## Office photographs

The website now includes the supplied Sony Associates office photographs under `assets/office/`: the exterior building photo and two interior workspace photos.


## Client section
A responsive current-client section has been added. Client names and portfolio descriptions are based on information supplied by Sony Associates and should be verified against active mandates before public production deployment.


## Latest changes
- Removed the Infrastructure / Capacity section.
- Removed the FAQ section.


## Coverage locations
The Coverage section now lists the target region: Indore, Bhopal, Jabalpur, Gwalior, Ratlam, Mandsaur, Dhar, Khandwa, Ujjain, Dewas and Sehore.
