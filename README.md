# drupal10-umami
<h2>Local Setup</h2>

<p>Step 1: Clone the code from the master branch</p>
<p>Step 2: move to root folder 'drupal10-umami'</p>
<p>Step 3: run 'ddev config'</p>
<p>Step 4: run 'ddev start'</p>
<p>Step 5: Import the db, run 'ddev import-db --file=DB/db.sql.gz' (Find the db inside the drupal10-umami/DB/db.sql.gz)</p>
<p>Step 6: run 'composer install'</p>
<p>Step 7: run 'ddev drush cim'</p>
<p>Step 8: run 'ddev drusb cr'</p>

<h2>Theme build</h2>

<p>Step 1: Go to theme folder 'cd web/custom/themes/umami_sdc'</p>
<p>Step 2: run 'npm install'</p>
<p>Step 3: run 'gulp build'</p>

<h2>Credentials</h2>

<strong>Username:</strong> Admin<br />
<strong>Password:</strong> Admin@123<br />
If you are facing any issue in loggin, please run ddev drush uli and change the credentials
