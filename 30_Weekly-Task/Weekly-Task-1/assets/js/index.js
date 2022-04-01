const data = [
  {
    id: 1,
    name: "git",
    active: true,
    text: `<!-- Git start -->
                <article id="58d879d0-4b49-469e-9342-ab801573e897" class="page sans">
                  <header>
                    <div class="page-header-icon undefined"><span class="icon">♐</span></div>
                    <h1 class="page-title">Version Control dan Branch Management (Git)</h1>
                  </header>
                  <div class="page-body">
                    <h3 id="f38a28e3-1058-48ad-80fd-a17fd0400347" class="">
                      Versioning adalah mengatur versi dari source code program
                    </h3>
                    <blockquote id="1e2f11e4-a576-4a99-9eb3-4bb2b1f43e8e" class="">
                      Problemnya adalah akan ada banyak file revisi setiap melakukan perubahan
                    </blockquote>
                    <figure id="8aed75d2-1dd1-4afb-97f6-930ac9b1df4d" class="image text-center">
                      <a href="./assets/img/git/Version Co 8aed7/Untitled.png"
                        ><img
                          class="image-summary"
                          src="./assets/img/git/Version Co 8aed7/Untitled.png"
                      /></a>
                    </figure>
                    <h3 id="ff6e264a-5857-4434-8f3c-164c1cd6eca1" class="">Tools</h3>
                    <ul id="9eb17065-f1de-447c-9c10-4c462e460fba" class="bulleted-list">
                      <li style="list-style-type: disc">Version Control System</li>
                    </ul>
                    <ul id="63bf6090-06bf-4feb-a780-661458c1b4f7" class="bulleted-list">
                      <li style="list-style-type: disc">Source Code Manager</li>
                    </ul>
                    <ul id="e483b1e2-4f6e-4143-86c8-c83caee84f56" class="bulleted-list">
                      <li style="list-style-type: disc">Revision Control System</li>
                    </ul>
                    <p id="189995fd-bc98-41ce-b43a-5e17c5a795bc" class=""></p>
                    <h3 id="d5deb758-4aaa-4f1e-b320-00450f6eb386" class="">
                      Version Control System dibagi 3:
                    </h3>
                    <ul id="e771e55b-790c-4e99-9f5c-ca2ce1f517e2" class="bulleted-list">
                      <li style="list-style-type: disc">Single user</li>
                    </ul>
                    <ul id="b7e5fb5c-2115-4e5b-8486-8d31a1380391" class="bulleted-list">
                      <li style="list-style-type: disc">Centralized</li>
                    </ul>
                    <ul id="8fbc6a4e-80fc-4554-8bf0-03d18a3a294e" class="bulleted-list">
                      <li style="list-style-type: disc">Distributed (Git)</li>
                    </ul>
                    <p id="70953c2c-18de-415d-9b84-1f2d3eef21c5" class=""></p>
                    <h3 id="3afb4fb8-5bd0-4965-bab5-100b19c04ec6" class="">GIT</h3>
                    <ul id="d474153b-1d5b-411b-b42e-d9663ca365fa" class="bulleted-list">
                      <li style="list-style-type: disc">Terdistribusi</li>
                    </ul>
                    <ul id="42ac4c9d-5591-42e9-9462-539c1612373a" class="bulleted-list">
                      <li style="list-style-type: disc">Dibuat oleh Linus Torvalds (2005)</li>
                    </ul>
                    <ul id="d08bb217-774e-4dcc-bf60-22e89c32400c" class="bulleted-list">
                      <li style="list-style-type: disc">Git dapat melacak semua perubahan file</li>
                    </ul>
                    <ul id="d4bab469-d7d9-4df7-ba28-275ae5bede8a" class="bulleted-list">
                      <li style="list-style-type: disc">
                        Kita dapat menggunakan Github sebagai git hosting service
                      </li>
                    </ul>
                    <p id="b29dfe2d-e5f4-44a7-9896-5b2f74f9798e" class=""></p>
                    <h3 id="0ce8c815-0dd5-4b10-8fad-0821bc80d0f7" class="">Install Git di Windows</h3>
                    <ul id="2f5c6a88-3d9f-4610-a991-140a25cbb19c" class="bulleted-list">
                      <li style="list-style-type: disc">Download Git</li>
                    </ul>
                    <ul id="12c779fc-924c-42f5-9bc0-058f38b88970" class="bulleted-list">
                      <li style="list-style-type: disc">Install Git</li>
                    </ul>
                    <ul id="53bb8e8f-953a-4852-b46b-f137ce2fc023" class="bulleted-list">
                      <li style="list-style-type: disc">Open Git bash / command prompt</li>
                    </ul>
                    <p id="5f733e84-5234-4edd-a29e-e55fc25d0e3d" class=""></p>
                    <h3 id="7d8a6ad3-f6c7-4b27-be4f-8ef392e97fd0" class="">Setup Git</h3>
                    <pre id="87c35882-0da0-49ed-acf7-74d5a0ac78e9" class="code"><code># git config
          //set a name that is identifiable for credit when review version history
          $ git config --global user.name “John Done”
          //set an email address that will be associated with each history marker
          $ git config --global user.email “johndoe@email.com”
        
          # start with init
          $ git init //initialize an existing directory as a Git repository
          $ git remote add &lt;remote_name&gt; &lt;remote_repo_url&gt; //add a git URL as an alias
          $ git push -u &lt;remote_name&gt; &lt;local_branch_name&gt; //Transmit local branch commits to the remote repository branch
        
          # start with an existing project, start working on the project
          $ git clone ssh://john@example.com/path/to/my-project.git //retrieve an entire repository from a hosted location via URL
          $ cd my-project</code></pre>
                    <p id="ceff80d9-9ab4-4fd3-8d30-4e5b4d9a851b" class=""></p>
                    <h3 id="88d482d6-a7cb-4899-bd36-6cff8af6e507" class="">Saving Changes</h3>
                    <figure
                      class="block-color-gray_background callout"
                      style="white-space: pre-wrap; display: flex"
                      id="e271e592-c73b-40a4-b2c6-952345f3eaf1"
                    >
                      <div style="width: 100%">
                        Staging: working directory → Staging area : git add Staging area → repository:
                        git commit
                      </div>
                    </figure>
                    <figure id="8de6f3c1-292c-4d1e-9996-0115e154bdf2" class="image text-center">
                      <a href="./assets/img/git/Version Co 8aed7/Untitled 1.png"
                        ><img src="./assets/img/git/Version Co 8aed7/Untitled 1.png"
                      /></a>
                    </figure>
                    <blockquote id="d87205e1-5e9b-4163-956f-ed0a52b70f50" class="">
                      Git add : add a file as it looks now to your next commit (stage) Git commit -m
                      “message”: commit your staged content as a new commit snapshot
                    </blockquote>
                    <p id="a025a6a6-394c-4965-8933-63ef89ef31c8" class="">
                      <strong>Git Diff and Stash</strong>
                    </p>
                    <blockquote id="4b9cda7d-b257-41e8-ae92-89ce70bcb677" class="">
                      git diff : diff of what is changed but not stage git diff --staged : diff of
                      what is staged but not yet commited git stash: Save modified and staged changes
                      git stash apply: re-applying your stashed changes
                    </blockquote>
                    <p id="add3a38a-3b78-4666-87d0-3627050a0f80" class="">
                      <strong>File .gitignore</strong>
                    </p>
                    <p id="cdf1acfd-7a01-4137-8e2c-cf584b16e338" class="">
                      penting untuk menahan file yang tidak perlu diupload ke github
                    </p>
                    <h3 id="f537575a-a9e8-4539-90bf-cdc398788086" class="">Inspecting Repository</h3>
                    <p id="bf8e8ca9-1ec2-4659-9125-a3adf2e2594b" class="">
                      <strong>Git Log and Checkout</strong>
                    </p>
                    <ul id="89eed230-8b40-4aa5-96af-af16a6d855f8" class="bulleted-list">
                      <li style="list-style-type: disc">git log —oneline: viewing an old revision</li>
                    </ul>
                    <ul id="fe130ca9-ea6f-4585-8f5f-4a903026a538" class="bulleted-list">
                      <li style="list-style-type: disc">
                        git checkout: switch to another branch and check it out into your working
                        directory
                      </li>
                    </ul>
                    <ul id="81091a4c-ab79-46f9-b24b-5218094987d6" class="bulleted-list">
                      <li style="list-style-type: disc">
                        git reset:
                        <ul id="6e411a7d-b5c6-4a13-883c-83743641b06c" class="bulleted-list">
                          <li style="list-style-type: circle">
                            —soft: uncommit changes, changes are left staged (index)
                          </li>
                        </ul>
                        <ul id="2dc8049f-29f7-4428-a703-9885aa60dae9" class="bulleted-list">
                          <li style="list-style-type: circle">
                            —hard: uncommit + unstage + delete change, nothing left
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <figure id="7f78856f-c2cb-4c57-978e-bf816d7e3d00" class="image text-center">
                      <a href="./assets/img/git/Version Co 8aed7/Untitled 2.png"
                        ><img
                          style="width: 468px"
                          src="./assets/img/git/Version Co 8aed7/Untitled 2.png"
                      /></a>
                    </figure>
                    <figure id="0b5ba5f0-8219-448f-972f-c2c44dc1b024" class="image text-center">
                      <a href="./assets/img/git/Version Co 8aed7/Untitled 3.png"
                        ><img
                          style="width: 409px"
                          src="./assets/img/git/Version Co 8aed7/Untitled 3.png"
                      /></a>
                    </figure>
                    <h3 id="efe985e0-3b3a-4c90-8aeb-1b253bfcc9b3" class="">Syncing</h3>
                    <p id="59563b7d-b4b1-4ff0-8a09-db6ccb09f75f" class="">
                      <strong>Git Push, Fetch, Pull</strong>
                    </p>
                    <ul id="b83062af-0ee1-454e-87f1-d489217a15e9" class="bulleted-list">
                      <li style="list-style-type: disc">
                        Git push: Transmit local branch commits to the remote repository branch
                      </li>
                    </ul>
                    <ul id="9e08a11f-7c52-4348-8370-f97f2f5edce7" class="bulleted-list">
                      <li style="list-style-type: disc">
                        Git Fetch: fetch down all the branches from that Git remote
                      </li>
                    </ul>
                    <ul id="e0e8ca18-4f12-4e87-9344-722d9e2baeea" class="bulleted-list">
                      <li style="list-style-type: disc">
                        Git pull: fetch and merge any commits from the tracking remote branch
                      </li>
                    </ul>
                    <figure id="fb5730bf-e710-496e-b8fe-bfd27e9989bf" class="image text-center">
                      <a href="./assets/img/git/Version Co 8aed7/Untitled 4.png"
                        ><img src="./assets/img/git/Version Co 8aed7/Untitled 4.png"
                      /></a>
                    </figure>
                    <h3 id="986a7cd1-a4b4-4c3f-99fc-0324b9f4c2a9" class="">Branches</h3>
                    <ul id="88df1fe5-6868-4778-a6f7-2d0610cd50a8" class="bulleted-list">
                      <li style="list-style-type: disc">Git branch —list: show all branch</li>
                    </ul>
                    <ul id="6e12e187-2c05-4435-afd8-2d8845ac3446" class="bulleted-list">
                      <li style="list-style-type: disc">
                        git branch &lt;branch&gt;: create new branch
                      </li>
                    </ul>
                    <ul id="087a2d7e-f5db-4454-9c10-e1efb01779bd" class="bulleted-list">
                      <li style="list-style-type: disc">
                        git branch -D &lt;branch&gt;: delete branch
                      </li>
                    </ul>
                    <ul id="5bd00feb-84f3-4cd7-93ee-7de621ef623d" class="bulleted-list">
                      <li style="list-style-type: disc">git branch -a: list remote branch</li>
                    </ul>
                    <ul id="8eb3de28-299b-4cb4-be52-823b202f063b" class="bulleted-list">
                      <li style="list-style-type: disc">
                        git merge: Merging 2 branch (make sure u commit before merge)
                      </li>
                    </ul>
                    <h3 id="9c78eff1-5775-403f-8984-433e410ef7a3" class="">Best Practice</h3>
                    <figure id="9d023bfb-2142-4a0f-ae0b-5535c3ddf769" class="image text-center">
                      <a href="./assets/img/git/Version Co 8aed7/Untitled 5.png"
                        ><img
                          style="width: 485px"
                          src="./assets/img/git/Version Co 8aed7/Untitled 5.png"
                      /></a>
                    </figure>
                    <ul id="693091cc-5793-48d8-9dee-bb566d49f293" class="bulleted-list">
                      <li style="list-style-type: disc">Master branch jangan diganggu</li>
                    </ul>
                    <ul id="d5e25abe-300b-4024-ad12-c5309b1d23cd" class="bulleted-list">
                      <li style="list-style-type: disc">Jangan langsung edit di development</li>
                    </ul>
                    <ul id="f98720eb-a44b-4272-9c55-743892c86d28" class="bulleted-list">
                      <li style="list-style-type: disc">
                        Terapkan perubahan fitur di branch development saja
                      </li>
                    </ul>
                    <ul id="460604e8-fc6e-4126-ad48-305298d904b6" class="bulleted-list">
                      <li style="list-style-type: disc">
                        Terapkan master dengan develop setelah proses developing clear
                      </li>
                    </ul>
        
                    <h1>Praktikum</h1>
                    <div class="image">
                      <a href="./assets/img/git/Version Co 8aed7/git.png">
                        <img src="./assets/img/git/Version Co 8aed7/git.png" alt="" />
                      </a>
                    </div>
                  </div>
                </article>
                <!-- Git end -->`,
  },
  {
    id: 2,
    name: "uiux",
    text: `<article id="f0b84322-6a5a-4ff9-a565-08d95ba2e5a7" class="page sans">
              <header>
                <div class="page-header-icon undefined"><span class="icon">🖌️</span></div>
                <h1 class="page-title">UI/UX</h1>
              </header>
              <div class="page-body">
                <h1 id="6a7eda4a-cf2d-4ad0-bb3d-9a6f488b2c16" class="">UX</h1>
                <p id="0146409c-0ee2-47ce-990c-d4a5b341d625" class="">
                  UX itu tentang keseluruhan yang pengguna rasakan setiap menggunakan sebuah
                  produk
                </p>
                <figure id="8ed7d61a-b14b-4ee6-bcc0-883d37cda5b8" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled.png"
                    ><img style="width: 610px" src="./assets/img/ui-ux/UI UX 8ed7d/Untitled.png"
                  /></a>
                </figure>
                <p id="c843c944-144a-4196-8ab8-d43a1e4b4d71" class="">
                  Untuk membuat UX yang baik pada produk yang akan dibuat, kita dapat memanfaatkan
                  framework design thinking. Design thinking terdiri dari beberapa tahap seperti:
                </p>
                <ul id="bc192280-4aa8-45d7-bca5-1bb01415eb4e" class="bulleted-list">
                  <li style="list-style-type: disc">
                    <strong>Empathize: </strong>Terdiri dari persona, jobs to be done, usability
                    testing
                  </li>
                </ul>
                <ul id="4183a684-1187-487c-9a8a-46cda0bfa6ec" class="bulleted-list">
                  <li style="list-style-type: disc">
                    <strong>Define: </strong>Mengidentifikasi needs dan memprioritaskan needs
                  </li>
                </ul>
                <ul id="77c90b38-ff71-4fee-9df7-d7430cdfe700" class="bulleted-list">
                  <li style="list-style-type: disc">
                    Ideate: Merancang task flow dan menggambar prototype Lo-Fi
                  </li>
                </ul>
                <ul id="0d95ee5d-73d2-4e2f-a506-abfa02ac44b5" class="bulleted-list">
                  <li style="list-style-type: disc">
                    <strong>Prototype</strong>: Membuat mockup Hi-Fi serta prototype yang sudah
                    diklik
                  </li>
                </ul>
                <ul id="0e6f9b3c-dff1-4103-bc00-226748e8ed7f" class="bulleted-list">
                  <li style="list-style-type: disc">
                    <strong>Validasi</strong>: Testing prototype ke user dan melakukan iterasi
                    desain
                  </li>
                </ul>
                <h1 id="2e82a1e2-3659-4874-90e0-8d5c2fc1f37e" class="">Empathize</h1>
                <p id="86c8dc22-3295-46bc-bc63-4ad09f0d2000" class="">
                  Dalam empathize kita harus memahami apa yang benar-benar user alami. hindari
                  bias pribadi sebagai designer pada tahap ini agar solusi yang akan dibuat dapat
                  menyelesaikan masalah user. Toolsnya adalah sebagai berikut:
                </p>
                <h3 id="f7e1d130-dbd3-4f23-b9c5-21cc43582571" class="">Empathy Map</h3>
                <figure id="bdec1c59-2638-4ea6-8e8d-9d784cab383b" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 1.png"
                    ><img
                      style="width: 922px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 1.png"
                  /></a>
                </figure>
                <h2 id="f877fb92-9cbe-4766-ab99-c8c1a168b71e" class="">User Persona</h2>
                <p id="c412ff00-151d-43f7-8aaa-91d66852f776" class="">
                  user persona merupakan tipe profil user nyata kita. Dapat berisi ekspektasi,
                  kebutuhan, goals, dan kebiasaan user.
                </p>
                <p id="fc6772cb-6dad-4bb1-974d-db0cb4cc9430" class="">
                  User persona dapat menjawab:
                </p>
                <ul id="97bb49b1-01c7-4745-a260-6a4ede31b343" class="bulleted-list">
                  <li style="list-style-type: disc">What are we designing for?</li>
                </ul>
                <ul id="2a68300b-6572-4ba7-87cc-d483e1858be5" class="bulleted-list">
                  <li style="list-style-type: disc">Who are we designing for?</li>
                </ul>
                <figure id="4ab2494d-0950-472e-9247-7e7dee6e2812" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 2.png"
                    ><img
                      style="width: 565px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 2.png"
                  /></a>
                </figure>
                <h2 id="0a684438-4644-40da-996b-aa218ce43aef" class="">Jobs to be done</h2>
                <p id="bb823d18-9016-45e4-bdcf-a27057ab0382" class="">
                  Isinya tentang apa tugas atau pekerjaan yang ingin diselesaikan oleh user.
                  Formatnya adalah:
                </p>
                <figure id="2bb5007f-cac6-4dd1-bf72-dd64231dfde1" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 3.png"
                    ><img
                      style="width: 334px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 3.png"
                  /></a>
                </figure>
                <figure id="0f5f2d89-d525-49ae-ba40-11c55884fe88" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 4.png"
                    ><img
                      style="width: 929px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 4.png"
                  /></a>
                </figure>
                <h2 id="38867f9b-6033-4340-97f8-f049372837ae" class="">Usability Testing</h2>
                <p id="1ba515c4-efae-4e3b-b93c-70e283c27b80" class="">
                  New product bisa menggunakan interview atau metode kualitatif lainnya
                </p>
                <p id="da77bb43-7f32-44eb-b5d5-240f768ed4cf" class="">
                  Existing product bisa menggunakan pendekatan kuantitatif seperti angket
                </p>
                <h1 id="7704b235-ae3a-4d4a-a7f9-d251eb2ca2b4" class="">Define</h1>
                <p id="030c5c92-3eca-40d3-8147-21d7a5686cb6" class="">
                  Mencari inti dari masalah user serta mencari kriteria dalam design yang akan
                  dibuat berdasarkan goals dan behavior user. Tools:
                </p>
                <h3 id="773c8318-d5f1-4873-9184-a6953395a516" class="">
                  Prioritizing Pain Points
                </h3>
                <h3 id="b3e49cfd-ec8b-4738-9e48-c9f5c4ad0de7" class="">
                  Defining the core problem
                </h3>
                <h3 id="535ac391-49a8-4d95-b41e-ed57bb3ebd74" class="">User Goal</h3>
                <figure id="9a0d91c2-430d-4814-a37e-5e62d3cd75f0" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 5.png"
                    ><img
                      style="width: 1249px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 5.png"
                  /></a>
                </figure>
                <h3 id="25d81f0c-30e3-4029-8d22-0e55c9a758ac" class="">Taskflow</h3>
                <p id="e58ecab8-14d5-46ed-b162-c710423fdb14" class="">
                  Tahapan yang dilakukan user untuk menyelesaikan tasknya
                </p>
                <figure id="97f950cf-62eb-4213-a777-9503f1c57724" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 6.png"
                    ><img
                      style="width: 1318px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 6.png"
                  /></a>
                </figure>
                <h3 id="2c344b27-6b2a-4e4e-a92b-273e7753b0d5" class="">Wireflow</h3>
                <figure id="a9743ccc-927c-4124-8391-19c424eb85af" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 7.png"
                    ><img
                      style="width: 1179px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 7.png"
                  /></a>
                </figure>
                <p id="eef24c5f-6750-40f5-9482-97949a98e2cf" class=""></p>
                <h1 id="cb2a8550-f9c0-49b1-b662-a95222dd6ed0" class="">UI</h1>
                <p id="8399c88e-061d-46c1-b16f-29f25cce5a90" class="">
                  Tampilan yang digunakan user untuk berinteraksi dengan produk
                </p>
                <p id="665c96d6-bff0-4d47-b463-aba3268cb04c" class=""></p>
                <h2 id="a4b8539a-cc20-4ab1-a5cc-00f732a78cc8" class="">4 Pilar UI</h2>
                <h3 id="969abdf7-54f1-410c-b9bc-da2d260db2a3" class="">
                  1. Desain harus konsisten
                </h3>
                <p id="537f4a20-fc0c-4721-a73f-25f093bf8160" class="">
                  Design pattern perlu sama agar user familiar
                </p>
                <figure id="035d4a0c-59a6-4825-a425-3547381ea69d" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 8.png"
                    ><img
                      style="width: 552px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 8.png"
                  /></a>
                </figure>
                <h3 id="2252de90-a5ca-4bec-9f61-1ab100b144a2" class="">
                  2. Tampilan harus clear dan simple
                </h3>
                <p id="7da6a1bc-9bd8-4bfc-a6f9-8ded78d603ff" class="">
                  Hindari element yang tidak perlu dan buat bahasa yang clear
                </p>
                <figure id="053db9bf-c653-4803-848d-e71f1065bd1b" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 9.png"
                    ><img
                      style="width: 396px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 9.png"
                  /></a>
                </figure>
                <h3 id="151741ea-8f28-458e-aa28-fd2b3940d1a6" class="">
                  3. Typography yang tepat
                </h3>
                <p id="69fd2d85-3341-440c-b484-cfad5ab363f3" class="">
                  Perhatikan typeface, size, dan tata letak agar meningkatkan aspek readability
                </p>
                <figure id="46a81951-4801-469b-b552-66486afb1df2" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 10.png"
                    ><img
                      style="width: 542px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 10.png"
                  /></a>
                </figure>
                <h3 id="82a67628-bc91-4ce2-9071-fa8eb3afec9f" class="">
                  4. Umpan balik kepada user
                </h3>
                <p id="07b31738-22d6-4b62-9201-3c6dd81a44b5" class="">
                  Feedback harus bermakna, relevan, dan jelas
                </p>
                <figure id="3402762b-5055-40e3-b77d-3b8584682bf6" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 11.png"
                    ><img
                      style="width: 381px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 11.png"
                  /></a>
                </figure>
                <p id="0850f9ec-b983-4f7f-beb5-1f6402b7dc7e" class=""></p>
                <h2 id="64366614-4ac9-45a5-b629-e2163db4457a" class="">Prototype</h2>
                <p id="cc91f588-486b-4659-abb1-f7a2c206a4dc" class="">
                  Simulasi atau sampel dari produk akhir
                </p>
                <p id="314f35d7-ed3b-4325-b858-90e7164186ae" class="">
                  <strong>Goalsnya: </strong>
                </p>
                <ul id="c120779f-3140-4e1a-b64a-a71f02c98189" class="bulleted-list">
                  <li style="list-style-type: disc">
                    Testing produk sebelum developing agar dapat memangkas waktu dan biaya
                    produksi
                  </li>
                </ul>
                <ul id="68b16bf8-68d0-498e-abb0-142f9742a53c" class="bulleted-list">
                  <li style="list-style-type: disc">
                    Ambil feedback dari user, stakeholder, dan tim
                  </li>
                </ul>
                <ul id="068f832a-ae7f-48bc-8a33-ae477c408cde" class="bulleted-list">
                  <li style="list-style-type: disc">
                    Menunjukkan interaksi dan alur dari produk kepada developer
                  </li>
                </ul>
                <p id="a00b97c8-8125-4d9a-9bbe-3c4cba5adf1b" class="">
                  <strong>3 Pilar utama:</strong>
                </p>
                <ul id="00052fde-20c1-4093-a0fc-b69dc8746e53" class="bulleted-list">
                  <li style="list-style-type: disc">Representatif</li>
                </ul>
                <ul id="c587af00-fcf6-4b56-ba39-84302c939e43" class="bulleted-list">
                  <li style="list-style-type: disc">Presisi</li>
                </ul>
                <ul id="a80258f8-0b5a-4f8c-bc54-3180cf631c7e" class="bulleted-list">
                  <li style="list-style-type: disc">Interaktif</li>
                </ul>
                <p id="431cda56-6cff-4000-95ac-9d7e8049bd0a" class=""><strong>Tools:</strong></p>
                <ul id="417c2f97-f7c6-4038-8809-8adaa57d887c" class="bulleted-list">
                  <li style="list-style-type: disc">Axure</li>
                </ul>
                <ul id="8851e362-74b9-44b0-92fc-134b52a098fe" class="bulleted-list">
                  <li style="list-style-type: disc">Adobe XD</li>
                </ul>
                <ul id="d1da3ccd-7f4d-400c-8766-74a299bd478b" class="bulleted-list">
                  <li style="list-style-type: disc">Invision</li>
                </ul>
                <ul id="258d2638-cb6b-4e08-b44a-d7eb4c48e185" class="bulleted-list">
                  <li style="list-style-type: disc">Marvel</li>
                </ul>
                <ul id="05339241-722a-4222-9954-3e7e9b8f2afb" class="bulleted-list">
                  <li style="list-style-type: disc">Sketch</li>
                </ul>
                <ul id="cec1b75e-5f1c-4da1-a307-caf8106984d1" class="bulleted-list">
                  <li style="list-style-type: disc">Balsamiq</li>
                </ul>
                <ul id="8d77033b-535c-4ce5-8963-0e65b0493ecd" class="bulleted-list">
                  <li style="list-style-type: disc">Flinto</li>
                </ul>
                <ul id="fed38564-bffc-4e06-976e-c9de4b35f6d2" class="bulleted-list">
                  <li style="list-style-type: disc">Framer</li>
                </ul>
                <p id="38f84d3c-bc33-4520-a779-62afd44a85de" class=""></p>
                <h1 id="397e839a-943f-48e1-8362-4526aaa604da" class="">Praktikum</h1>
                <p id="340c530c-2139-472c-970d-43c2ed4393f1" class="">
                  Pada praktikum UI/UX saya menganalisis UX dan UI dari website
                  <a href="http://medium.com">Medium</a>. Medium merupakan platform blogging yang
                  cukup terkenal untuk saat ini. Menurut pendirinya, Ev Williams, Medium merupakan
                  wadah di internet di mana orang-orang dapat membagikan ide dan cerita yang lebih
                  dari 140 karakter serta tidak diperuntukkan bagi temannya saja seperti twitter.
                  Halaman yang saya analisis adalah bagian homepage, notification, dan writing.
                  Secara garis besar UX dan UI medium telah baik karena memiliki design yang clean
                  dan mudah digunakan serta dapat menyelesaikan jobs to be done dari user yaitu
                  memperoleh dan membagikan gagasan melalui media tulisan.
                </p>
                <hr id="aaf976fd-90e2-4e6e-81b9-318fa6476075" />
                <p id="e1474141-1d6c-4220-b78b-951b7e36493f" class=""></p>
                <p id="fedac363-e658-4aa8-ae7f-5dc659c17fa1" class="">
                  Link praktikum:
                  <a
                    href="https://docs.google.com/document/d/1SQgNDWGJvOfT3gVZwbphicx4L5mUvQmVCVnjIZS-QMY/edit?usp=sharing"
                    target="_blank"
                  >
                    Gdocs
                  </a>
                </p>
                <figure id="57a40318-98f1-4927-86fa-bf866440a360" class="image">
                  <a href="./assets/img/ui-ux/UI UX 8ed7d/Untitled 12.png"
                    ><img
                      style="width: 1352px"
                      src="./assets/img/ui-ux/UI UX 8ed7d/Untitled 12.png"
                  /></a>
                </figure>
                <p id="a0e6010d-4e4e-40d1-a243-f4c72e852603" class=""></p>
              </div>
            </article>
            <!-- UI UX Ends -->`,
  },
  {
    id: 3,
    name: "figma",
    text: `<!-- Figma start -->
              <article id="72c91395-9b8f-483a-8101-ffc8dd19f8d4" class="page sans">
                <header>
                  <div class="page-header-icon undefined"><span class="icon">🎨</span></div>
                  <h1 class="page-title">Figma</h1>
                </header>
                <div class="page-body">
                  <p id="8af752d3-11cc-45ce-8d24-f2735514330e" class="">
                    <strong>Figma </strong>merupakan editor grafis vektor sekaligus prototyping
                    tools yang berbasis website, namun dapat juga pada versi desktop. Keuntungan
                    dari menggunakan figma adalah gratis, dapat digunakan pada mac serta PC, dapat
                    berkolaborasi dengan orang lain, memiliki design system yang baik, dapat
                    melakukan prototyping dengan baik serta mudah, dan memiliki banyak plugin yang
                    dapat membantu proses design. I love Figma haha. Namun di sisi lain Figma adalah
                    aplikasi berbasis penyimpanan cloud sehingga membutuhkan koneksi internet untuk
                    bekerja.
                  </p>
                  <p id="d0ba9e7c-05bf-4554-8ed6-614f487ebec1" class=""></p>
                  <p id="4355a3aa-0356-413b-9324-3442ca7cf47e" class="">
                    Hal pertama yang perlu dilakukan ketika pertama kali menggunakan figma adalah
                    menyiapkan frame, menyusun palet warna, menyusun typography, serta reusable
                    component agar mempermudah proses design aplikasi. Dengan menggunakan pendekatan
                    atomic design, kita dapat membuat aplikasi dengan menyusun component layaknya
                    lego.
                  </p>
                  <p id="77815462-2a0f-4aa8-8aa3-33be9d08af4f" class=""></p>
                  <h2 id="7a5a0fa3-18bd-41ae-a01f-92057ebceb62" class="">Praktikum</h2>
                  <p id="d2d66a84-3701-423f-b9ca-ea4bfd9ec66d" class="">
                    Pada praktikum kali ini saya meniru website
                    <a href="http://medium.com">medium.com</a> yang merupakan platform blogging
                    buatan mantan founder twitter. Berikut ini tahapan saya dalam mendesign website
                    tersebut:
                  </p>
                  <ul id="d7851e24-f0fe-4fe0-823a-0644fbce2a85" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Mengambil icon di setiap page menggunakan extension svggrabber
                    </li>
                  </ul>
                  <ul id="2e90710d-5656-4c4a-bab6-df3226abfa41" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Menyusun palet warna dengan mengambil color dengan inspect element pada
                      website tersebut. untuk mengakses developer toolsnya saya menekan “Fn + F12”
                    </li>
                  </ul>
                  <ul id="0125cf37-2d5e-4b3e-8452-a86a8d6bad0c" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Menyusun typography menggunakan inspect element. Typeface yang digunakan
                      adalah georgia dan inter, lalu untuk sizenya saya atur mengikuti style pada
                      website tersebut
                    </li>
                  </ul>
                  <ul id="b4ab15b8-4421-43a4-a95f-da8a3ee4f36b" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Membuat setiap style button dan variantnya di file UI/UX Alterra team library
                    </li>
                  </ul>
                  <ul id="b27ef634-9a5f-48e1-9990-3cee412c000a" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Membuat komponen-komponen website yang cenderung digunakan berulang di file
                      UI/UX Alterra team library
                    </li>
                  </ul>
                  <ul id="c28021e4-5184-4213-9fa9-bea71b5bedff" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Publish design system ke file UIUX Alterra
                    </li>
                  </ul>
                  <ul id="3c7253ae-1917-49db-beea-3c9f0559dacb" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Membuat frame dengan ukuran 1440 x 728 sebagai tempat mendesain (728px dipilih
                      karena laptop saya agak kecil sehingga navigasi akan terpotong jika
                      menggunakan height lebih dari itu)
                    </li>
                  </ul>
                  <ul id="e8daba66-3724-49d0-b85d-7c056e7fd45f" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Menyusun website dengan menggunakan assets yang telah dibuat sebelumnya
                    </li>
                  </ul>
                  <ul id="3f15a2db-806c-4a78-930b-fa839f94e669" class="bulleted-list">
                    <li style="list-style-type: disc">
                      Melakukan prototyping dengan menaruh horizontal scrolling pada topic chips dan
                      author section, memasang opsi tidak bergerak meskipun scrolling pada navigasi,
                      dan memasang opsi vertical scrolling pada bagian tengah dan sidebar.
                    </li>
                  </ul>
                  <p id="bf03ef4c-e4b8-4956-a349-63ae687c09bc" class=""></p>
                  <h1 id="6208ba26-dfba-436c-87df-968ab4a67dcc" class="">Praktikum</h1>
                  <p id="7b095315-9fbc-458a-ad5f-6f545f806a9f" class="">
                    Link Folder Figma: <a
                      href="https://www.figma.com/team_invite/redeem/gBsMsfNtw4WG7m26IeuvaZ"
                      >Figma</a
                    >
                  </p>
                  <p id="6ee84cd8-fc2f-46c4-99c2-242808d7c0be" class="">
                    Link Desain Figma: <a
                      href="https://www.figma.com/file/Moz6SaHUkDtUTteMYbs9ct/UIUX-Alterra?node-id=16%3A2"
                      >DesignFigma</a
                    >
                  </p>
                  <p id="5c569a3b-5b2c-4317-98d7-cc78952a8f9b" class="">
                    Link Design System: <a
                      href="https://www.figma.com/file/087lcFHN1SMKGxZW5dM0mH/UI%2FUX-Alterra-team-library?node-id=438%3A31"
                      >DesignSystem</a
                    >
                  </p>
                  <p id="c47a467e-c918-4a96-9508-3d80e32277a7" class="">
                    Link Prototyping: <a
                      href="https://www.figma.com/proto/Moz6SaHUkDtUTteMYbs9ct/UIUX-Alterra?page-id=16%3A2&amp;node-id=17%3A3&amp;viewport=241%2C48%2C0.49&amp;scaling=scale-down-width&amp;starting-point-node-id=17%3A3"
                      >Prototype</a
                    >
                  </p>
                  <h1 id="c9da1488-a5b5-4793-92a9-f40792f29956" class="">Screenshots</h1>
                  <h2 id="f5ac0583-400e-41c6-bf63-0284fa6a36de" class="">
                    <strong>Homepage</strong>
                  </h2>
                  <figure id="34693808-dfc1-41ad-9a7f-bd1f4efe9fe8" class="image">
                    <a
                      href="https://user-images.githubusercontent.com/67999361/155646186-99f65884-88b4-4e12-8c70-1ee68b67e5ec.png"
                      ><img
                        src="https://user-images.githubusercontent.com/67999361/155646186-99f65884-88b4-4e12-8c70-1ee68b67e5ec.png"
                    /></a>
                  </figure>
                  <h2 id="ca3720ab-5150-4bc0-87c2-d419d19b97ac" class="">
                    <strong>Notif Page</strong>
                  </h2>
                  <figure id="882c9e57-6366-4a94-ac5f-ca4ae41288c2" class="image">
                    <a
                      href="https://user-images.githubusercontent.com/67999361/155646203-eeaaf392-b029-46e5-a2fc-8f3420e9484b.png"
                      ><img
                        src="https://user-images.githubusercontent.com/67999361/155646203-eeaaf392-b029-46e5-a2fc-8f3420e9484b.png"
                    /></a>
                  </figure>
                  <h2 id="a417b745-e0fb-4b21-b70e-97333813bc5e" class="">
                    <strong>Stories Page</strong>
                  </h2>
                  <figure id="856d3826-06f4-4720-bacf-6a18dee0ea94" class="image">
                    <a
                      href="https://user-images.githubusercontent.com/67999361/155646224-48a08bbf-b0bc-4a0a-9de8-fb9944d82c0b.png"
                      ><img
                        src="https://user-images.githubusercontent.com/67999361/155646224-48a08bbf-b0bc-4a0a-9de8-fb9944d82c0b.png"
                    /></a>
                  </figure>
                  <h2 id="cb9aaaa0-d99b-4cba-bd7b-558c28a695fc" class="">
                    <strong>Write Page</strong>
                  </h2>
                  <figure id="3f282dd0-25f4-4c24-ac7f-7d2c7e7d65da" class="image">
                    <a
                      href="https://user-images.githubusercontent.com/67999361/155646263-0a497587-c7ce-42c9-9ad6-feedc4d395dd.png"
                      ><img
                        src="https://user-images.githubusercontent.com/67999361/155646263-0a497587-c7ce-42c9-9ad6-feedc4d395dd.png"
                    /></a>
                  </figure>
                  <p id="06e5421c-0c4d-404a-9b52-b7386457d085" class=""></p>
                </div>
              </article>
              <!-- Figma ends -->`,
  },
  {
    id: 4,
    name: "html",
    text: `<article id="c6c6494e-07fe-4151-9db5-4029b60f3e80" class="page sans">
    <header>
      <div class="page-header-icon undefined"><span class="icon">🔗</span></div>
      <h1 class="page-title">HTML</h1>
    </header>
    <div class="page-body">
      <p id="3572c85e-f675-4c3c-8648-59116370b2c8" class="">
        <strong>HTML </strong>merupakan singkatan dari Hypertext Markup Language yang berperan
        sebagai standar dalam membentuk struktur pada website. Kegunaan utam HTML adalah untuk
        membuat struktur, tampilan, serta isi dari tampilan website. Kita dapat menuliskan kode
        HTML pada beberapa text editor seperti notepad, notepad++, sublime, VS Code, serta atom.
        Untuk saat ini saya hanya menggunakan Visual Studio Code saja agar mempermudah prosesnya
        melalui beberapa extension.
      </p>
      <p id="d8dbeaad-8eb6-4ceb-9a31-169a61ea2852" class=""></p>
      <p id="4fad0d25-bab8-40d4-ae45-39c9e58c3788" class="">
        Sebuah website umumnya memiliki struktur seperti:
      </p>
      <pre
        id="7d395476-4e28-429c-abeb-d67a06c0bd28"
        class="code"
      ><code>&lt;!DOCTYPE html&gt; &lt;!-- Mendefinisikan dokumen sebagai HTML 5 --&gt;
&lt;html lang=&quot;en&quot;&gt; &lt;!-- elemen root html --&gt;
&lt;head&gt; &lt;!-- berisi informasi meta tentang dokumen --&gt;
  &lt;meta charset=&quot;UTF-8&quot;&gt;
  &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;
  &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot;&gt;
  &lt;title&gt;Document&lt;/title&gt; &lt;!-- judul halaman website --&gt;
&lt;/head&gt;
&lt;body&gt; &lt;!-- berisi konten halaman website --&gt;
  &lt;div&gt;&lt;/div&gt; &lt;!-- divider konten yang biasanya lebih dari satu baris --&gt;
      &lt;span&gt;&lt;/span&gt; &lt;!-- divider tulisan atau konten yang satu baris aja --&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      <p id="ee74310f-11ba-438f-8582-c75b09620e39" class="">Tag HTML5 penting:</p>
      <pre
        id="285d4ff8-da3d-401f-8445-70c0d2208f09"
        class="code"
      ><code>&lt;!-- Heading dan paragraph --&gt;
&lt;!-- --&gt;
&lt;h1&gt;&lt;/h1&gt; &lt;!-- Heading terbesar --&gt;
&lt;h6&gt;&lt;/h6&gt; &lt;!-- Heading terkecil --&gt;
&lt;p&gt;&lt;/p&gt; &lt;!-- penanda paragraph --&gt;

&lt;!-- Link --&gt;
&lt;a href=&quot;https://www.youtube.com&quot;&gt;Cek Youtube&lt;/a&gt; &lt;!-- tulisan berisi link --&gt;
&lt;a href=&quot;https://www.youtube.com&quot; target=&quot;_blank&quot;&gt;Cek Youtube&lt;/a&gt; &lt;!-- Buka youtube di tab baru --&gt;

&lt;!-- Image --&gt;
&lt;img src=&quot;logo-alterra.png&quot; alt=&quot;ini-logo-alterra&quot;&gt; &lt;!-- tulisan alt akan muncul ketika gambar tidak dapat diakses client --&gt;

&lt;!-- Listing --&gt;
&lt;ol&gt; &lt;!-- untuk list berurutan --&gt;
  &lt;li&gt;Sapi&lt;/li&gt;
  &lt;li&gt;Ayam&lt;/li&gt;
  &lt;li&gt;Babi&lt;/li&gt;
&lt;/ol&gt;
&lt;ul&gt; &lt;!-- untuk list yang tidak berurutan --&gt;
  &lt;li&gt;Sapi&lt;/li&gt;
  &lt;li&gt;Ayam&lt;/li&gt;
  &lt;li&gt;Babi&lt;/li&gt;
&lt;/ul&gt;</code></pre>
      <p id="9cb2cff9-e13a-4af4-aea6-a3cc7451b73c" class="">
        Untuk materi tabel saya rasa saat ini jarang digunakan, jadi saya tidak banyak membahas
        mengenai ini. Peran tabel dapat digantikan oleh &lt;div&gt; dan dimodifikasi oleh css.
      </p>
      <p id="f38da7c1-3489-405d-8d18-43b7210ee9a5" class=""></p>
      <p id="e6092971-15e0-4d58-b776-975c538262f6" class="">
        Form HTML merupakan topik yang cukup penting dalam HTML karena form memiliki peran untuk
        menerima input dari user seperti login, signup, tambah komen, dll. Untuk membuat form kita
        perlu menambahkan sintaks &lt;form&gt;&lt;/form&gt; sebagai pembungkus form. Sintaks yang
        biasa digunakan dalam form adalah &lt;input&gt;, &lt;select&gt;, &lt;textarea&gt;, serta
        &lt;button&gt;.
      </p>
      <p id="914529fc-08d6-4be9-a351-87865b028ae3" class=""></p>
      <h1 id="16465943-0697-4885-a142-b1ba329bb5d6" class="">Praktikum</h1>
      <p id="d7e7b7aa-ce42-466c-87d5-61af5828dd73" class="">
        Praktikum HTML kali ini adalah membuat tiga halaman website yang terdiri dari homepage
        yang berisi pengenalan website bernama MyBook, Form page berisi pendaftaran website
        MyBook, serta welcome page yang berisi ucapan selamat kepada user yang telah mendaftarkan
        diri pada MyBook. Flow website ini adalah user memasuki homepage, lalu menekan link sign
        up; kemudian user diarahkan untuk mengisi form berisi first name, last name, gender,
        nationality, language spoken, serta bio; setelah user menekan submit pada form, user akan
        diarahkan pada halaman welcome.
      </p>
      <p id="a1bb4317-be22-498d-ba88-a67fcf87d8a8" class="">
        Link Github:
        <a href="https://github.com/rafliogun49/react_muhammad-rafli/tree/main/5_HTML/Praktikum"
          >Github</a
        >
      </p>
      <h1 id="d04a4a1a-6b6c-459c-99c0-cf178d2010d4" class="">Screenshots</h1>
      <figure id="d4365884-7bbb-4cc5-ae70-9c135c9b5cbb" class="image">
        <a href="./assets/img/html/HTML d4365/Untitled.png"
          ><img style="width: 1366px" src="./assets/img/html/HTML d4365/Untitled.png"
        /></a>
      </figure>
      <figure id="1a88affa-dbe4-4fe2-83ce-64efb02ae4f2" class="image">
        <a href="./assets/img/html/HTML d4365/Untitled 1.png"
          ><img style="width: 1366px" src="./assets/img/html/HTML d4365/Untitled 1.png"
        /></a>
      </figure>
      <figure id="2bfdfe38-c456-4f3c-9806-32ec07e4b4f8" class="image">
        <a href="./assets/img/html/HTML d4365/Untitled 2.png"
          ><img style="width: 1366px" src="./assets/img/html/HTML d4365/Untitled 2.png"
        /></a>
      </figure>
    </div>
  </article>
`,
  },
  {
    id: 5,
    name: "css",
    text: `<article id="3ee85a51-2471-4622-b577-79faaf23a8f9" class="page sans">
      <header>
        <div class="page-header-icon undefined"><span class="icon">🧡</span></div>
        <h1 class="page-title">CSS</h1>
      </header>
      <div class="page-body">
        <p id="68dfec33-8efb-42fa-bed0-127cdd3a2e16" class="">
          CSS (Cascading Style Sheets) merupakan bahasa yang dapat digunakan untuk menghias tampilan
          dan mengatur tata letak dokumen HTML. Sintaksnya terdiri dari selector, property, dan
          value. CSS dapat ditambahkan melalui tiga cara yaitu external, internal, dan inline.
        </p>
        <ul id="3694a3cf-49fa-4c67-bdeb-43ecc545a57a" class="bulleted-list">
          <li style="list-style-type: disc">
            External CSS adalah kita membuat CSS di luar file HTML, kemudian disambungkan dengan
            sintaks link pada bagian head HTML. dengan teknik ini, tampilan HTML akan lebih rapi dan
            lebih mudah di-maintain.
          </li>
        </ul>
        <pre
          id="44f95f1f-8372-4840-9f0e-17c6507d2587"
          class="code"
        ><code>&lt;link rel=&quot;stylesheet&quot; href=&quot;mystyle.css&quot;&gt;</code></pre>
        <ul id="05949e41-1d01-4e69-8088-9d422d03683f" class="bulleted-list">
          <li style="list-style-type: disc">
            Inline CSS adalah membuat CSS pada setiap elemen tunggal. Teknik ini dapat digunakan
            untuk mengaplikasikan style yang unik pada suatu elemen.
          </li>
        </ul>
        <pre
          id="6afce977-55d2-4a18-b025-aa9c5906fa80"
          class="code"
        ><code>&lt;h1 style=&quot;color:blue;text-align:center;&quot;&gt;This is a heading&lt;/h1&gt;</code></pre>
        <ul id="301f74ec-cf3f-4d8d-9988-db54debfcf16" class="bulleted-list">
          <li style="list-style-type: disc">Internal CSS adalah membuat CSS pada head HTML.</li>
        </ul>
        <pre id="8242424f-f210-4d54-8472-1a18d2c99ff3" class="code"><code>&lt;style&gt;
	body {
  background-color: #19355f;
	}
	h1 {
  color: #f47523;
  margin-left: 40px;
	}
&lt;/style&gt;</code></pre>
        <h3 id="21f3b2ff-1a94-46c2-9854-3f8f14484cc2" class="">CSS Selector</h3>
        <p id="47b63103-1343-4b98-b085-8c67864dac81" class="">
          CSS Selector dapat menggunakan ID (#) atau class (.), untuk best practicenya lebih baik
          menggunakan class. selector dapat digabungkan dengan menggunakan tanda (,)
        </p>
        <pre id="8fdeccd9-c468-4b1e-bd3f-fe5c3b0925c7" class="code"><code>h1,h2 {
	color: #121212;
}</code></pre>
        <h3 id="b8c43c6c-ef0a-4bfe-8c6c-d90e098abffa" class="">CSS Font</h3>
        <p id="2ac373ce-0818-44e2-a7d1-975ca03dcd71" class="">
          sintaks yang umumnya digunakan adalah font-family untuk menentukan kelompok font,
          font-size untuk menentukan ukuran font, serta font-weight untuk menentukan ketebalan teks.
          Lalu sumber font yang dapat digunakan adalah
          <a href="https://fonts.google.com/">https://fonts.google.com/</a>
        </p>
        <h3 id="70b937d4-72c1-4fdb-8558-a9310d2e6f3f" class="">CSS Margin dan Padding</h3>
        <figure id="46364722-50f3-4c28-a0c8-ce2d2810729d" class="image">
          <a href="CSS%2046364/Untitled.png"
            ><img style="width: 235px" src="CSS%2046364/Untitled.png"
          /></a>
        </figure>
        <p id="2b6990a6-8e89-4d6d-ae86-8eae149119dd" class="">
          Pada dasarnya setiap komponen memiliki struktur seperti gambar berikut. Untuk mengatur
          jarak antar komponen, kita dapat menggunakan margin, namun ketika kita ingin memberikan
          space pada setiap komponen dapat menggunakan padding.
        </p>
        <h3 id="c66b5da4-df2f-4fd6-a628-9ada903dda7a" class="">CSS Display</h3>
        <p id="72cfd211-676f-42fd-aec6-478d7b857c57" class="">
          Berfungsi untuk menentukan tampilan pada elemen. Display memiliki properti block untuk
          membuat baris baru, inline-block untuk menampilkan komponen sesuai lebar yang diperlukan,
          dan none untuk menyembunyikan komponen. Selain ini sebenarnya kita dapat menggunakan flex
          dan grid yang dapat lebih responsive dan intuitif digunakan.
        </p>
        <h3 id="5c73fafe-f772-4011-be1d-32bd7ad1f134" class="">CSS Color</h3>
        <ul id="5ce4f721-7f79-49fb-9cc9-22086d3d2ed0" class="bulleted-list">
          <li style="list-style-type: disc">color: untuk mewarnai teks</li>
        </ul>
        <ul id="4ea6ad49-dff4-4654-8b9c-2904877012f0" class="bulleted-list">
          <li style="list-style-type: disc">
            background: untuk menerapkan background pada suatu element
          </li>
        </ul>
        <h3 id="957fe619-0a8c-4c6c-8843-f855cd11e7ae" class="">CSS Pseudo Element</h3>
        <p id="9f03ff9e-734e-4bf9-b4a2-c0e656e9638c" class="">
          Membuat elemen semu yang tidak muncul di file HTML.
        </p>
        <p id="73db6aab-7a45-43e2-9df6-10f388a25086" class="">sintaks ::before atau ::after</p>
        <p id="5843b1aa-00ff-4c9a-a132-3e8489a7fc59" class=""></p>
        <h1 id="6701ff3d-ca40-459c-854e-54ce8bfd1041" class="">Praktikum</h1>
        <p id="16c46e76-0a8f-44ec-8211-1008b941fee9" class="">
          Pada praktikum CSS, saya membuat 2 website yaitu file1 dan file2.
        </p>
        <ul id="21361b06-400d-47c9-b219-782032db0618" class="bulleted-list">
          <li style="list-style-type: disc">
            file1 merupakan website yang berisi latihan untuk membuat kotak merah berukuran 100 x
            100 px dengan teks di bagian tengahnya, kotak biru berukuran 100 x 100 px dengan teks di
            bagian tengahnya, serta kotak hijau berukuran 350-350px. Keseluruhan konten website
            ditaruh di tengah dan bersifat responsif.
          </li>
        </ul>
        <ul id="cc5eabfd-7ffe-4dc1-ad48-e15104481146" class="bulleted-list">
          <li style="list-style-type: disc">
            file2 merupakan website pencatatan yang terdiri dari navigasi, konten post, serta
            footer. website ini bersifat responsif juga karena saya menggunakan display flex.
          </li>
        </ul>
        <h1 id="d8ebf5bf-75c0-457f-8d94-c03fc5a5b6b3" class="">Screenshots</h1>
        <h1 id="3f535831-7a5a-45bf-82f7-b0ed424f2f69" class=""><strong>File1</strong></h1>
        <figure id="f7949689-10b7-4f22-8d81-1aab700af422" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/155913027-9991f98e-a38b-495d-9e3a-b5199ee3412e.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/155913027-9991f98e-a38b-495d-9e3a-b5199ee3412e.png"
          /></a>
        </figure>
        <h1 id="3827da53-7a61-4871-a7d6-46ad49294476" class=""><strong>File2</strong></h1>
        <figure id="bf2c4ae8-812b-416c-9a0b-208b040c0e98" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/156320553-f1091030-2692-4a93-95da-40b9b1ca38ec.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/156320553-f1091030-2692-4a93-95da-40b9b1ca38ec.png"
          /></a>
        </figure>
        <h2 id="b354a811-b890-44d4-85dc-18c62866d0ac" class="">
          <strong>Responsive header</strong>
        </h2>
        <figure id="dd841973-8f05-4d18-b781-b9892aacb2ce" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/156320653-8505e58c-cddd-4d3f-9358-6f5e57f13953.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/156320653-8505e58c-cddd-4d3f-9358-6f5e57f13953.png"
          /></a>
        </figure>
        <figure id="c4f06e6b-52d0-406c-9341-277bd82d62a4" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/156320659-08ad87a9-b631-4f6b-a272-75ea78f246f4.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/156320659-08ad87a9-b631-4f6b-a272-75ea78f246f4.png"
          /></a>
        </figure>
      </div>
    </article>
`,
  },
  {
    id: 6,
    name: "bootstrap",
    text: `<article id="8c329286-2b70-4736-8957-846964ce2f7e" class="page sans">
    <header>
      <div class="page-header-icon undefined"><span class="icon">🆎</span></div>
      <h1 class="page-title">Bootstrap</h1>
    </header>
    <div class="page-body">
      <p id="095f3599-1c6c-484a-970c-337d1c922b78" class="">
        <strong>Bootstrap </strong>merupakan salah satu framework UI yang terkenal untuk membuat
        website yang responsive dan mobile-first. Bootstrap memiliki beberapa keuntungan seperti
        penggunaan yang gratis, mudah dipelajari, performa yang cepat, dan tentunya memberikan
        tampilan website yang responsif. Cara penggunaannya untuk kali ini adalah menempatkan tag
        link berisi link bootstrap pada header.
      </p>
      <p id="3a014d47-e9c1-4e1b-8987-6fd5258fc1bb" class=""></p>
      <p id="121a3590-602f-4bd2-b092-7963613735c2" class="">
        Hal penting yang saya pelajari di bootstrap adalah:
      </p>
      <ul id="351646bb-a393-4719-87f9-6aba97080fd6" class="bulleted-list">
        <li style="list-style-type: disc">
          penggunaan container untuk mengemas sejumlah konten. property: container,
          container-fluid
        </li>
      </ul>
      <ul id="524e8b9f-6f4f-4f22-b7e1-e6d55239cb61" class="bulleted-list">
        <li style="list-style-type: disc">
          row untuk mengatur tata letak serta menjadi patokan ukuran kolom childnya
        </li>
      </ul>
      <ul id="6e8d0d47-4144-4b27-b03f-9c282d6e3269" class="bulleted-list">
        <li style="list-style-type: disc">
          Column: Sistem grid bootstrap memungkinkan kita untuk memiliki maksimal 12 kolom dalam
          suatu halaman website. aturan penulisan: col-[lg,md,sm]-[1-12]
        </li>
      </ul>
      <ul id="d3c27ee2-6e55-4e53-8aa1-a24b79a8e352" class="bulleted-list">
        <li style="list-style-type: disc">
          Button: Membuat tombol aturan: btn-[primary,success,warning,danger,light,link,dark]
        </li>
      </ul>
      <p id="c07190b8-709b-476c-bab1-be5a88b6dfee" class=""></p>
      <h1 id="ec6d7f5b-9371-487c-9685-e88eac42ab11" class="">Praktikum</h1>
      <p id="3250db3f-1941-445d-af1b-10aceaca6d61" class="">
        Praktikum bootstrap ini kita diminta untuk membuat website bernama eStartup dengan
        menggunakan assets (css, js, img, dan svg) yang telah disediakan oleh pihak Alterra. Jadi
        di sini saya hanya mengurus bootstrap untuk HTML dan sedikit mengubah css. Komponen
        website ini terdiri dari navigasi, section about us, section feature, dan footer.
      </p>
      <p id="4c8803fa-7fbf-4ee3-adf3-97065af4ce11" class="">
        Link:
        <a href="https://github.com/rafliogun49/react_muhammad-rafli/tree/main/7_Bootstrap"
          >Github</a
        >
      </p>
      <h3 id="9320f6af-7b50-481f-b728-21a0f67c5a24" class="">
        <strong>Website dalam ukuran large</strong>
      </h3>
      <figure id="a9421250-d69a-49df-a8f7-0f20e2b36f77" class="image">
        <a
          href="https://user-images.githubusercontent.com/67999361/156877163-1df6ed14-4f90-403a-a3d1-8e19cf8e7539.png"
          ><img
            src="https://user-images.githubusercontent.com/67999361/156877163-1df6ed14-4f90-403a-a3d1-8e19cf8e7539.png"
        /></a>
      </figure>
      <h3 id="6d89015b-1234-4b27-9859-10d09aa89601" class="">
        <strong>Website dalam ukuran medium</strong>
      </h3>
      <figure id="75941d11-3a99-43a5-a874-2c476e0ff15b" class="image">
        <a
          href="https://user-images.githubusercontent.com/67999361/156877167-611427cd-fcbc-474f-a8d1-4e19836d1ba1.png"
          ><img
            src="https://user-images.githubusercontent.com/67999361/156877167-611427cd-fcbc-474f-a8d1-4e19836d1ba1.png"
        /></a>
      </figure>
      <h3 id="1a29a236-2ce3-4af1-901b-3003dfb2e395" class="">
        <strong>Website dalam ukuran small</strong>
      </h3>
      <figure id="9845895b-119e-4e32-90f9-835009e768dc" class="image">
        <a
          href="https://user-images.githubusercontent.com/67999361/156877174-836f38ff-3252-48b6-a579-68498630ef3d.png"
          ><img
            src="https://user-images.githubusercontent.com/67999361/156877174-836f38ff-3252-48b6-a579-68498630ef3d.png"
        /></a>
      </figure>
      <p id="c5129893-ee76-48c4-8039-6e718da422d1" class=""></p>
    </div>
  </article>`,
  },
  {
    id: 7,
    name: "javascript",
    text: `<article id="3bff3bad-2c5b-47ed-a562-3018ebbb0239" class="page sans">
      <header>
        <div class="page-header-icon undefined"><span class="icon">📜</span></div>
        <h1 class="page-title">Javascript</h1>
      </header>
      <div class="page-body">
        <p id="4e26c52c-cbf3-4fc3-8c74-a5bc3576d0d6" class="">
          <strong>Javascript </strong>adalah bahasa pemrograman berbasis teks yang digunakan pada
          client-side dan server-side sehingga memugkinkan untuk membuat halaman web yang
          interaktif. Javascript bersifat high level, bahasa pemrograman scripting, untyped, dan
          interpreted.
        </p>
        <h2 id="a9532cf2-2c93-4aa2-9841-608ecd610ca2" class="">Variabel Javascript</h2>
        <p id="74a53cab-e43a-47f6-a158-81cb3377ca2e" class="">
          Sederhananya variabel merupakan suatu wadah yang dapat diisi oleh data. data yang dapat
          disimpan bisa berupa data primitif atau objek. Javascript memiliki tiga tipe variabel yang
          memiliki kegunaan yang berbeda yaitu var, let, dan const. Agar variabel dapat digunakan,
          kita perlu mendeklarasikan variabel terlebih dahulu.
        </p>
        <table id="6649400f-bedb-4793-993d-e94f325606fb" class="simple-table">
          <thead>
            <tr id="2bb034e5-6a29-475d-8942-9ac6f86b75c2">
              <th id="BsRA" class="simple-table-header"></th>
              <th id="a}Q_" class="simple-table-header">Var</th>
              <th id="m_qj" class="simple-table-header">Let</th>
              <th id="tYzg" class="simple-table-header">Const</th>
            </tr>
          </thead>
          <tbody>
            <tr id="a26a5bc9-b6a1-4b49-a152-814642e1b91e">
              <td id="BsRA">Declare</td>
              <td id="a}Q_">dapat dideklarasi tanpa assignment</td>
              <td id="m_qj">dapat dideklarasi tanpa assignment</td>
              <td id="tYzg">Harus langsung diisi nilai</td>
            </tr>
            <tr id="45c7c2e8-df44-419e-a011-f9a23ddd0506">
              <td id="BsRA">Redeclare</td>
              <td id="a}Q_">Dapat redeclare</td>
              <td id="m_qj">tidak dapat redeclare</td>
              <td id="tYzg">tidak dapat redeclare</td>
            </tr>
            <tr id="57be76e2-54be-4a65-9486-08b02e7df001">
              <td id="BsRA">Reassignment</td>
              <td id="a}Q_">Dapat mengubah nilai</td>
              <td id="m_qj">dapat mengubah nilai</td>
              <td id="tYzg">tidak dapat mengubah nilai</td>
            </tr>
            <tr id="a1f098e7-f26a-487c-920c-fd892cc5490d">
              <td id="BsRA">Hoisting (menggunakan variabel sebelum di-<em>declare</em>)</td>
              <td id="a}Q_">Bisa</td>
              <td id="m_qj">Tidak bisa</td>
              <td id="tYzg">Tidak bisa</td>
            </tr>
          </tbody>
        </table>
        <p id="a036eaeb-275b-458c-a7a2-ebcd47093fa1" class=""></p>
        <h2 id="3efc5956-5871-4f78-af74-805dcd55e867" class="">Value and Reference</h2>
        <p id="c769029a-cfa9-4fcd-ba94-f05d67e75486" class="">
          Nilai/data dapat dibagi menjadi dua, yaitu primitive dan object. Primitive merupakan
          elemen paling sederhana yang tersedia dalam bahasa pemrograman. Nilai primitif terdiri
          dari tipe data string, boolean, number, float, bigInt, undefined, null, dan symbol.
          Sementara itu objects merupakan unit yang menyimpan properti dan fungsi, sehingga lebih
          kompleks dari nilai primitive. Tipe data objects terdiri dari object, array, function,
          date, set, map, weak set, dan weak map. Sedikit fakta unik yaitu kita dapat membuat
          variabel yang nilainya merupakan variabel lainnya.
        </p>
        <pre id="63c0eb73-2636-4aae-9e34-977748689f32" class="code"><code>let a = 1;
let b = a;
console.log(b)
console.log(a === b)
//output 1
//output true</code></pre>
        <p id="fb38605e-72d9-4b52-9584-fc58a776bd06" class=""></p>
        <h2 id="a55aff82-9afc-4cff-9665-433b0613ffed" class="">Destructuring</h2>
        <p id="21ad6c6f-7a30-45b6-8819-079bd85f2b0a" class="">
          Sebuah teknik untuk menyalin nilai dari suatu array atau objek ke dalam variabel yang
          berbeda.
        </p>
        <pre id="e438da16-07eb-4e6e-8825-713947e7e5b4" class="code"><code>// Array
const [firstElement, secondElement] = list
//example array
const x = [1,2,3,4,5]
const [y,z,,a] = x
console.log(y) //result 1
console.log(z) //result 2
console.log(a) //result 4

//Object
const user = {
	id = 42,
	is_verified = true
};

const {id, is_verified} = user
console.log(id) //42
console.log(is_verified) //true</code></pre>
        <p id="3337ee13-bc96-4d17-b450-3cf3677454cb" class=""></p>
        <h2 id="e7b8865a-f662-485f-be37-0892735e4b20" class="">Spreading</h2>
        <p id="df9d051b-8fc9-4f5e-be57-b721865a86bb" class="">
          Sintaks spreading (...) memungkinkan kita untuk menyalin data pada suatu array atau objek
          ke array atau objek lainnya.
        </p>
        <pre id="b6a7dde1-4d5d-4ade-8e0e-393b6c83d451" class="code"><code>//Array
const a = [1,2,3]
const b = [1]
const c = [...a, ...b]
console.log(c) //[1,2,3,1]

//Object
const a = {a:1};
const b = {b:2};
const c = {...a,...b};
console.log(c) //{a:1, b:2}</code></pre>
        <p id="437bea9b-9ce9-456c-a4e7-dbdbc55bd5ae" class=""></p>
        <h2 id="4c379126-9153-41d2-b3ce-fe713af7f30a" class="">Method</h2>
        <p id="b2fedadd-9e1a-4125-a93c-905c99768ed0" class="">
          Method merupakan sebuah fungsi yang dapat dijalankan pada objek, sehingga memudahkan
          proses pengolahan data.
        </p>
        <table id="e7aa8631-36fc-4b03-aefd-43987edca809" class="simple-table">
          <tbody>
            <tr id="ac46931a-9926-408f-8544-8643522b7adf">
              <td id="^xpz">Method</td>
              <td id="&lt;KfT">Arti</td>
            </tr>
            <tr id="b1172f82-44a0-4661-8c8f-d6fbc0e36466">
              <td id="^xpz">concat</td>
              <td id="&lt;KfT">menggabungkan dua array dan mengembalikannya dalam satu array</td>
            </tr>
            <tr id="2cee9b28-994b-434b-86c8-3429ac10a190">
              <td id="^xpz">map</td>
              <td id="&lt;KfT">
                membuat array baru yang hasilnya sesuai dengan fungsi yang diterapkan pada setiap
                elemen
              </td>
            </tr>
            <tr id="3958d0ab-4e74-485f-8aeb-2184dd8eed3a">
              <td id="^xpz">foreach</td>
              <td id="&lt;KfT">memanggil fungsi untuk setiap elemen array</td>
            </tr>
            <tr id="66a465b6-0b0e-4781-83ca-b02ca746b800">
              <td id="^xpz">slice</td>
              <td id="&lt;KfT">memilih bagian dari array, dan mengembalikan array baru</td>
            </tr>
            <tr id="6e05c456-2532-43c9-b1da-7ab98f313570">
              <td id="^xpz">filter</td>
              <td id="&lt;KfT">
                membuat array baru berisi elemen-elemen yang memiliki nilai true pada fungsi di
                dalamnya
              </td>
            </tr>
            <tr id="061d3a77-c0e7-487b-8722-64dc66b5fc23">
              <td id="^xpz">reduce</td>
              <td id="&lt;KfT">melakukan operasi pada setiap elemen array menjadi nilai tunggal</td>
            </tr>
          </tbody>
        </table>
        <h2 id="3d9e3f27-8c35-4b18-b865-d593680ca6a2" class="">Control Flow</h2>
        <p id="18195e5a-2244-4c1a-a9c7-3ef371347e61" class="">
          Secara default kode akan dieksekusi dari atas ke bawah atau dari kiri ke kanan secara
          berurutan (synchronous). Tapi kenyataannya kita dapat mengatur alur eksekusi kode sesuai
          keinginan kita dengan menggunakan looping serta conditioning.
        </p>
        <table id="6b242aca-edb0-40a8-b40d-cd8f2aaf549f" class="simple-table">
          <tbody>
            <tr id="b58525fa-06ad-4ccd-a381-2ac402356f61">
              <td id="\n}z">Looping</td>
              <td id="|&gt;ND">Conditioning</td>
            </tr>
            <tr id="ad566ca2-acd6-4403-ba33-e885f9005900">
              <td id="\n}z">For</td>
              <td id="|&gt;ND">If Else (percabangan jika maka)</td>
            </tr>
            <tr id="f9fb5d42-bb29-47e2-8f97-dc8394711988">
              <td id="\n}z">While</td>
              <td id="|&gt;ND">Switch (percabangan jika maka yang banyak dan spesifik)</td>
            </tr>
            <tr id="ff69528a-2589-4004-8c5b-4c50670e3ffa">
              <td id="\n}z">Do While</td>
              <td id="|&gt;ND">
                Try catch (statement try akan mengeksekusi program, lalu catch akan menangkap error
                pada statement di dalam try)
              </td>
            </tr>
            <tr id="dca4be6f-2511-4a11-b554-2d1e4dd2785b">
              <td id="\n}z"></td>
              <td id="|&gt;ND">Throw (melempar error yang akan ditangkap oleh catch)</td>
            </tr>
          </tbody>
        </table>
        <h2 id="3b0d834e-7fdc-49b6-bd78-2256e8e5590e" class="">Function</h2>
        <p id="ef904583-8955-4618-bfb7-3c6d709cd40f" class="">
          Serangkaian prosedur yang dapat digunakan berulang kali
        </p>
        <p id="bef5a55c-1e8e-4133-894f-628242d9ff02" class="">
          ada tiga cara untuk membuat function di javascript
        </p>
        <pre id="f1ccd678-8227-4d80-ba35-6aaec1f66623" class="code"><code>//function
function namaLengkap (depan, belakang) {
	console.log(depan +&quot; &quot;+belakang)
}

let namaLengkap = function (depan, belakang) {
	console.log(depan +&quot; &quot;+belakang)
}

let namaLengkap = () =&gt; {
	console.log(depan +&quot; &quot;+belakang)
}</code></pre>
        <p id="3851b9a8-b868-46dd-9448-b672d9d94062" class=""></p>
        <h2 id="036a5ec3-8e7d-4ddd-999c-02fff986bb29" class="">Asynchronous</h2>
        <p id="81c1df42-ed75-4c67-9957-ff66c2fc6569" class="">
          Eksekusi tak selalu berdasarkan urutan, tapi berdasarkan waktu atau proses.
        </p>
        <pre
          id="aad89323-7c89-4f83-82cf-6ff7874428a0"
          class="code"
        ><code>console.log(&quot;Mulai&quot;);
setTimeout(() =&gt; {console.log(&quot;Proses....&quot;)}, 1000);
console.log(&quot;Berhenti&quot;)

//Output:
//Mulai
//Berhenti
//Proses</code></pre>
        <p id="33a8b242-ff11-4935-a92e-ccb32dbe3bfc" class="">
          Kita dapat menggunakan async-await, promise, dan setTimeOut()
        </p>
        <p id="8ef2f72f-95c0-49c7-b774-62b87e0fc6e6" class="">
          <strong>Promise</strong> itu ibarat janji. hasilnya di masa depan dapat berupa
          keberhasilan atau kegagalan
        </p>
        <p id="a071bbd2-140f-4201-afee-1ecce8b96bfe" class="">
          <strong>setTimeOut()</strong> adalah fungsi untuk menunda eksekusi selama beberapa waktu
        </p>
        <p id="23b32958-3afc-4afb-b4a0-3e7d6d64fbb0" class="">
          <strong>Async : </strong>sebuah function yang bekerja secara asynchronous yang
          mengembalikan promise sebagai valuenya, tapi style penulisannya seperti synchronous.
        </p>
        <p id="aa56468e-2a46-47e7-ba74-b61d5af624ee" class="">
          <strong>Await: </strong>keyword yang bertujuan untuk menghentikan eksekusi sambil menunggu
          promise-nya selesai
        </p>
        <p id="bf16aef4-9500-4315-a3fe-73e8cd4e73b5" class=""></p>
        <h2 id="dc83505f-bb8b-45e7-ad2b-18e010b9e1f6" class="">Class</h2>
        <p id="a9a0d749-52d6-4ae2-aa65-ef2a18cd0d3b" class="">
          Javascript bisa menerapkan OOP (Object Oriented Programming) menggunakan class. Class
          merupakan prototype dari suatu object.
        </p>
        <p id="8c143735-1dd0-48cf-8a5f-db0a28e37aca" class="">Komponen class terdiri dari:</p>
        <ul id="9444323a-e2d6-4060-9cda-f2e368bd66e1" class="bulleted-list">
          <li style="list-style-type: disc">keyword class: sebagai penanda class</li>
        </ul>
        <ul id="91f2072c-3cb3-48fb-940e-aaef696bf6e8" class="bulleted-list">
          <li style="list-style-type: disc">class name (harus Capitalize)</li>
        </ul>
        <ul id="f9c8bebd-cc3b-4239-a48b-7d28a9d8858e" class="bulleted-list">
          <li style="list-style-type: disc">constructor: method yang akan dipanggil pertama</li>
        </ul>
        <ul id="995f7fe9-b7cf-46d3-ada7-466322456dcb" class="bulleted-list">
          <li style="list-style-type: disc">attributes: properti yang ada di dalam class</li>
        </ul>
        <ul id="d8b95df1-61a4-4795-9a25-d8f20b9b708c" class="bulleted-list">
          <li style="list-style-type: disc">method: fungsi yang berada di dalam class</li>
        </ul>
        <ul id="bf700e6a-21eb-4742-9de0-b5f826b8ce7e" class="bulleted-list">
          <li style="list-style-type: disc">extends: untuk menurunkan sifat dari parent class</li>
        </ul>
        <p id="b3b82f01-411b-47b2-b3c2-394d5ef5c77b" class=""></p>
        <h2 id="1e3ce296-b19d-4cf8-9b7c-d31b90e1c690" class="">Document Object Model (DOM)</h2>
        <p id="51a6e0e8-45fc-48cd-abbb-f50e704be557" class="">
          API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah
          object. Hal terpenting dalam DOM ada empat:
        </p>
        <ul id="a06dfaea-c5ce-45e7-adb5-cffd00d75ce1" class="bulleted-list">
          <li style="list-style-type: disc">DOM Selection Method:</li>
        </ul>
        <table id="5c92e2eb-7891-477c-8367-da40a5dbd81c" class="simple-table">
          <thead>
            <tr id="87ded66b-0dc1-475f-83bb-48af8200f499">
              <th id="_OaT" class="simple-table-header">Event</th>
              <th id="FIjd" class="simple-table-header">Kegunaan</th>
            </tr>
          </thead>
          <tbody>
            <tr id="bc4a04b9-1e55-44ae-94c3-0ed46fc104bb">
              <td id="_OaT">getElementById()</td>
              <td id="FIjd">ambil element berdasarkan id</td>
            </tr>
            <tr id="20560852-dd3c-408c-af60-ed7c765e3365">
              <td id="_OaT">getElementByTagName()</td>
              <td id="FIjd">ambil tag HTML</td>
            </tr>
            <tr id="11d690ea-9073-4e9e-b8db-4d1f5ace2b78">
              <td id="_OaT">getElementByClassName()</td>
              <td id="FIjd">ambil element berdasarkan nama class</td>
            </tr>
            <tr id="96462a88-5961-4ef4-9f9e-ead60d56aa00">
              <td id="_OaT">querySelector()</td>
              <td id="FIjd">ambil element</td>
            </tr>
            <tr id="a89025e3-60e9-40de-9c17-bffa531fca3a">
              <td id="_OaT">querySelectorAll()</td>
              <td id="FIjd">ambil seluruh list element</td>
            </tr>
          </tbody>
        </table>
        <ul id="bd76799f-4559-4527-b204-b7a70373511d" class="bulleted-list">
          <li style="list-style-type: disc">DOM Manipulation</li>
        </ul>
        <table id="b418ee34-93f9-4a3b-b5a6-4aca5e492d58" class="simple-table">
          <thead>
            <tr id="e59c6bdc-67d6-4e54-8eef-33da06a12482">
              <th id="_OaT" class="simple-table-header">Event</th>
              <th id="FIjd" class="simple-table-header">Kegunaan</th>
            </tr>
          </thead>
          <tbody>
            <tr id="5069ffc3-60ec-4284-9c95-175067fdf9a5">
              <td id="_OaT">element.innerHTML</td>
              <td id="FIjd">merubah isi dalam tag</td>
            </tr>
            <tr id="e2ae27bd-307d-42d6-a363-d3020a057aed">
              <td id="_OaT">element.style</td>
              <td id="FIjd">mengubah style dari tag yang dipilih</td>
            </tr>
            <tr id="dc2f2004-8cca-4d2d-a9f0-3dddf9490b81">
              <td id="_OaT">element.setAttribute()</td>
              <td id="FIjd">memanipulasi atribute yang sudah dipilih</td>
            </tr>
            <tr id="49fe8e70-2e26-4a08-bfba-3b4b7aa4a8ec">
              <td id="_OaT">element.classList.add()</td>
              <td id="FIjd">memanipulasi class yang sudah diseleksi</td>
            </tr>
          </tbody>
        </table>
        <ul id="9f0e8eab-37b0-4173-a432-6917931a352e" class="bulleted-list">
          <li style="list-style-type: disc">DOM Event</li>
        </ul>
        <table id="e95eaf46-c934-4f9f-acda-a9331788203b" class="simple-table">
          <thead>
            <tr id="2a2707b8-f6bf-43ea-89aa-2da421373b67">
              <th id="_OaT" class="simple-table-header">Event</th>
              <th id="FIjd" class="simple-table-header">Trigger</th>
            </tr>
          </thead>
          <tbody>
            <tr id="e611d724-401c-405a-81fb-73786c996f58">
              <td id="_OaT">onclick</td>
              <td id="FIjd">Klik</td>
            </tr>
            <tr id="7e9282ca-ed67-4caa-9893-fc7173de9291">
              <td id="_OaT">onchange</td>
              <td id="FIjd">mengubah input</td>
            </tr>
            <tr id="97956f3a-50df-4178-ab33-ac3f34e51f57">
              <td id="_OaT">onblur</td>
              <td id="FIjd">meninggalkan kolom input</td>
            </tr>
            <tr id="75865e76-0e10-42d8-98d3-0ec768b42ea3">
              <td id="_OaT">onmouseover</td>
              <td id="FIjd">mouse diatas object</td>
            </tr>
            <tr id="56f384e3-e2ba-46c0-947c-e5cd34b8204a">
              <td id="_OaT">onmouseout</td>
              <td id="FIjd">mouse keluar object</td>
            </tr>
            <tr id="c0f1ad5e-47f5-48ba-922b-700a1cbbf00d">
              <td id="_OaT">oncopy</td>
              <td id="FIjd">copy suatu object</td>
            </tr>
          </tbody>
        </table>
        <h1 id="e03e1f93-20b7-4319-b019-12de927c55be" class="">Praktikum</h1>
        <p id="d2dab303-7ec1-4422-b158-4fdf9e6c70b1" class="">
          Pada praktikum kali ini saya menyelesaikan 6 soal dari Alterra menggunakan website
          <a href="http://Repl.it">Repl.it</a> sebagai text editor yang menyediakan environment
          node.js.
        </p>
        <p id="3ab9fa79-4a80-4a1d-982d-89711cebb22b" class=""></p>
        <p id="2c03bc59-1b6e-4d9f-a128-8a38c1189f3e" class="">
          Pada soal pertama, saya berhasil mengatur code javascript saya sehingga menghasilkan
          output seperti ini:
        </p>
        <blockquote id="91e27071-2d22-43a1-bb1c-10d47c3bee49" class="">
          Budi terdaftar sebagai kegiatan kampus merdeka array = Budi a adalah = kampus merdeka b
          adalah = kampus merdeka perkenalkan nama saya Budi nomor urut kampus merdeka sekarang
          sedang mengikuti kampus merdeka berasal dari indonesia
        </blockquote>
        <p id="e480fb46-d49f-4450-bd4f-6d96ef5e2480" class="">
          Kemudian pada soal kedua, saya memberikan penjelasan bahwa jika “let terdaftar = false”,
          maka fungsi “if” pada baris ke-21 tidak akan dieksekusi, karena fungsi if hanya menerima
          value variabel terdaftar adalah true. Kemudian saya juga memberikan penjelasan bahwa nilai
          const tidak dapat diubah, sehingga pemberian nilai baru pada variabel name di baris-ke 26
          akan mengakibatkan error. Terakhir, saya menjelaskan bahwa code ini akan tetap error
          meskipun code pada baris ke-26 dihapus, karena variabel asal bukanlah variabel yang
          memiliki scope global.
        </p>
        <p id="ab89ae99-1798-4bfc-9d4b-6af08e50d945" class=""></p>
        <p id="7751eb15-8d78-49d2-8329-a31e4d96dec7" class="">
          Pada soal ketiga, saya melakukan destructuring.
        </p>
        <p id="0c4cb1fc-ea2a-4d0d-b790-4fd1cda7ee2b" class=""></p>
        <p id="d916c8e0-e85c-46bc-bb95-2caa24e6965f" class="">
          Pada soal keempat, saya menggunakan method .map untuk mengambil setiap nilai pada array,
          kemudian setiap nilai tersebut yang memiliki karakter “-” akan diubah menjadi “/”, lalu
          data tersebut akan dimasukkan ke dalam array variabel newBdays.
        </p>
        <p id="1ba93b5a-5ff8-46da-9d43-d27396c382fb" class=""></p>
        <p id="8936db94-f4e7-46ef-81dd-db2ad7c8b019" class="">
          Pada soal kelima, saya menggunakan method map untuk mengambil setiap nilai pada array,
          kemudian setiap nilai tersebut akan dikali 2, lalu data tersebut dimasukkan ke dalam array
          variabel doubleValue.
        </p>
        <p id="a53915a9-fba9-478f-af2b-06ac15ab844b" class=""></p>
        <p id="049d3ba3-1028-4579-ba64-9f8797595f4d" class="">
          Pada soal keenam, saya menggunakan method map untuk mengambil seetiap nilai pada array,
          kemudian setiap nilai tersebut akan dibulatkan menjadi bilangan bulat menggunakan
          Math.round(), lalu data tersebut akan dimasukkan ke dalam array variabel roundArr.
        </p>
        <p id="042f5f01-fc5b-4ea5-8779-a40971630aa4" class=""></p>
        <p id="2bce0950-1ff1-4290-8939-85c779c5a976" class="">
          Link:
          <a
            href="https://github.com/rafliogun49/react_muhammad-rafli/tree/main/8_Javascript%20Refreshment/praktikum"
            >Github</a
          >
        </p>
        <h2 id="7449e0af-bab7-4466-acdf-c233e662e74c" class="">
          <strong>Jawaban soal no 1</strong>
        </h2>
        <figure id="c9d26f82-0ff1-4ce5-9a88-d7f0f4d9f4e2" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157054486-299facb7-ab30-429a-88a8-fca45c2a92b3.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157054486-299facb7-ab30-429a-88a8-fca45c2a92b3.png"
          /></a>
        </figure>
        <h2 id="738ff4a1-3efe-4c62-b3d6-5a4e3da58bec" class="">
          <strong>Jawaban soal no 2</strong>
        </h2>
        <figure id="e74e4238-7b27-47d8-a69a-64cbf4deb621" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157054709-a8d560a0-32c7-45a6-82a3-b8d6ed4e804a.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157054709-a8d560a0-32c7-45a6-82a3-b8d6ed4e804a.png"
          /></a>
        </figure>
        <h2 id="b67b98a5-f3cd-4a59-85f2-e7a7108aeeae" class="">
          <strong>Jawaban soal no 3</strong>
        </h2>
        <figure id="516d2df3-dc72-4e51-aa6e-ba8a77b6eb35" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157054868-88870f2f-e078-4f73-b88b-eb8e149d4f9e.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157054868-88870f2f-e078-4f73-b88b-eb8e149d4f9e.png"
          /></a>
        </figure>
        <h2 id="4ae4937b-5f75-4566-8e87-c7ee34970fbe" class="">
          <strong>Jawaban soal no 4</strong>
        </h2>
        <figure id="0c27f27b-df95-4694-9482-6d1ae364aaf7" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157055120-0473ae70-f92a-4d89-8693-45df7b6ee93e.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157055120-0473ae70-f92a-4d89-8693-45df7b6ee93e.png"
          /></a>
        </figure>
        <h2 id="28b763f4-3f71-41a9-8aac-e2cf62f899d2" class="">
          <strong>Jawaban soal no 5</strong>
        </h2>
        <figure id="b7fade3f-3f0e-4244-8b59-ee3b5a107b9a" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157055376-888bfbcd-a2ac-4e45-8411-0313302c4951.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157055376-888bfbcd-a2ac-4e45-8411-0313302c4951.png"
          /></a>
        </figure>
        <h2 id="f6d9c99f-3ac0-4ac9-9ef9-f6faf732dfc7" class="">
          <strong>Jawaban soal no 6</strong>
        </h2>
        <figure id="ebbd7c3a-65c3-4a95-b540-ae3aad767a9a" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157055470-586033ff-525c-4c16-8f84-8113340a29b6.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157055470-586033ff-525c-4c16-8f84-8113340a29b6.png"
          /></a>
        </figure>
        <p id="e604a31a-7478-42c4-a4aa-cbade1caa363" class=""></p>
      </div>
    </article>
`,
  },
  {
    id: 8,
    name: "cleanCode",
    text: `<article id="6cb252f8-d4b3-47e1-842c-29d1d129ff20" class="page sans">
      <header>
        <div class="page-header-icon undefined"><span class="icon">🚿</span></div>
        <h1 class="page-title">Clean Code</h1>
      </header>
      <div class="page-body">
        <p id="1f6316e4-b60c-47b7-87db-011b2fbae145" class="">
          <strong>Clean code</strong> merupakan istilah untuk kode yang mudah dibaca, dipahami, dan
          diubah oleh programmer. Pada dasarnya kode itu agak sulit untuk dipahami, oleh karena itu
          jangan dipersulit lagi dengan nama variabel yang aneh. Programmer perlu mempelajari clean
          code karena nantinya akan mempermudah kolaborasi serta mempercepat proses pengembangan.
        </p>
        <p id="71764bf8-fea6-4e8c-b358-afc5ee0474a5" class="">Karakteristik:</p>
        <ul id="7ce3e8e4-728e-473f-8ac7-de2235691f1d" class="bulleted-list">
          <li style="list-style-type: disc">Penamaan yang mudah dipahami</li>
        </ul>
        <ul id="7c9304a5-2b71-43b5-b55d-6abeb5881e80" class="bulleted-list">
          <li style="list-style-type: disc">Mudah dieja dan dicari</li>
        </ul>
        <ul id="9fa99909-23d4-4955-905e-fa59582e51f1" class="bulleted-list">
          <li style="list-style-type: disc">Singkat namun mendeskripsikan konteks</li>
        </ul>
        <ul id="a0936d7a-1047-4f8b-9fc9-10718f58d739" class="bulleted-list">
          <li style="list-style-type: disc">Nama variabel bersifat konsisten</li>
        </ul>
        <ul id="06f63727-64ef-476b-a541-0ffb6711ad8b" class="bulleted-list">
          <li style="list-style-type: disc">Jangan tambahkan konteks yang tidak penting</li>
        </ul>
        <ul id="c4aa3c54-d4bb-4ecf-850e-0c01d1882f46" class="bulleted-list">
          <li style="list-style-type: disc">
            Memberikan komentar pada proses penting yang berjalan
          </li>
        </ul>
        <ul id="c3f0adfe-2e86-4a1c-8b89-3601ec26d067" class="bulleted-list">
          <li style="list-style-type: disc">Function tidak memiliki banyak argumen</li>
        </ul>
        <ul id="2b9b016c-abbf-4edc-93a7-f0e3b0c6e20b" class="bulleted-list">
          <li style="list-style-type: disc">
            Gunakan style guide penulisan code. untuk javascript dapat menggunakan style guide
            AirBnB
          </li>
        </ul>
        <ul id="12929e46-ca9b-439d-b18d-4d0ec83646ba" class="bulleted-list">
          <li style="list-style-type: disc">Gunakan tools formating menggunakan prettier</li>
        </ul>
        <p id="bd193ab8-b534-4661-a70b-b162c1eb383f" class="">Prinsip:</p>
        <p id="361869f7-b8df-40eb-aa3e-53d6aa6b07fe" class="">
          <strong>KISS: Keep It So Simple / Keep it Simple Stupid</strong>
        </p>
        <p id="bd428798-635b-47e3-94cc-433edabcac0e" class="">
          Fungsi atau class harus kecil, melakukan satu tugas, dan tidak menggunakan banyak argumen.
        </p>
        <p id="d80dd765-f78b-4ae7-8ef7-5bbfda944e47" class="">
          <strong>DRY: Don’t Repeat Yourself</strong>
        </p>
        <p id="3ae1f4cc-7aef-4d28-9755-b8083347c40b" class="">
          Buatlah fungsi yang dapat digunakan berulang
        </p>
        <p id="ed3ea25b-a1b2-4d2e-a695-26ed29b43ba6" class="">
          <strong>Refactoring: Mengubah kode menjadi lebih efisien untuk di-maintain</strong>
        </p>
        <p id="6d5ca0a8-e333-4afe-bd2c-5a0946a75ee9" class=""></p>
        <h1 id="d5687f1e-a95b-44d2-b6e5-d09f22c6e54e" class="">Praktikum</h1>
        <h3 id="4a17ad5a-a053-43b2-a2bc-6b128336a486" class="">Problem 1 - Analysis</h3>
        <p id="e05f80fa-746d-4bfd-b808-344f1ef4b33a" class="">
          Terdapat 7 jenis kesalahan dalam kode ini:
        </p>
        <ul id="1d01cb53-ad06-42f0-bc26-5953dde16601" class="bulleted-list">
          <li style="list-style-type: disc">
            Tidak menggunakan comment untuk menjelaskan maksud kode yang dibuat.
          </li>
        </ul>
        <ul id="9cde4865-96df-4954-a565-3fb1e3acdd10" class="bulleted-list">
          <li style="list-style-type: disc">
            Penggunaan var untuk mendeklarasikan variabel sudah tidak disarankan sehingga sebaiknya
            diganti menjadi let atau const.
          </li>
        </ul>
        <ul id="cf2435a8-856e-4b51-aeef-0077bd2e140b" class="bulleted-list">
          <li style="list-style-type: disc">
            Tidak menggunakan constructor untuk menampung properti pada class user. Best practice
            dari pembuatan kelas adalah menggunakan constructor untuk menyimpan properti / variabel.
          </li>
        </ul>
        <ul id="9e3fbf89-b80a-449d-ade5-6f2b8b003563" class="bulleted-list">
          <li style="list-style-type: disc">
            penulisan kode seperti “user[ ] users” dan “user[ ] getallusers( )” tidak dikenal dalam
            javascript, sehingga kode ini membuat saya bingung dalam memahami kode serta kode ini
            berpotensi untuk mengalami error.
          </li>
        </ul>
        <ul id="baafe5c2-2e9a-406c-8c02-97dc987188e7" class="bulleted-list">
          <li style="list-style-type: disc">
            Penulisan nama class pada “class user” dan “class userservice” menggunakan huruf kecil,
            padahal seharusnya penulisan nama class menggunakan huruf kapital seperti class User dan
            class UserService.
          </li>
        </ul>
        <ul id="d15c9652-943e-41f9-b55b-2ea62490609a" class="bulleted-list">
          <li style="list-style-type: disc">
            penulisan function “getallusers()” dan “getuserbyid()” seharusnya menggunakan camel case
            menjadi “getAllUsers()” dan “getUserById()”
          </li>
        </ul>
        <ul id="0919fdc6-4389-408f-8acb-f03dadc225b8" class="bulleted-list">
          <li style="list-style-type: disc">
            parameter userid tidak menggunakan camelcase dan tidak efisien karena menggunakan kata
            “user” lagi meskipun ini berada dalam function yang mengandung kata “user” juga.
            sebaiknya parameter ini diubah menjadi “userId” atau “id” saja.
          </li>
        </ul>
        <p id="0227ac00-16a4-408c-b4b5-2a599eb19759" class=""></p>
        <h3 id="47923799-2175-4542-a78e-78fcdf069d18" class="">
          <strong>solusi soal nomor 1</strong>
        </h3>
        <figure id="c4286aea-192f-4375-b742-7a3503f392af" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157818915-1fbd1470-77e8-4d7a-89fc-4024444b1c4c.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157818915-1fbd1470-77e8-4d7a-89fc-4024444b1c4c.png"
          /></a>
        </figure>
        <h3 id="96f908f9-fbda-40a2-bfc6-f55fb00b7fdc" class="">
          <strong>solusi soal nomor 2</strong>
        </h3>
        <figure id="6ea7fa41-f8ee-4abd-8234-e413e8ed232a" class="image">
          <a
            href="https://user-images.githubusercontent.com/67999361/157819091-65209dd1-946f-499b-bbaa-f06b3c479796.png"
            ><img
              src="https://user-images.githubusercontent.com/67999361/157819091-65209dd1-946f-499b-bbaa-f06b3c479796.png"
          /></a>
        </figure>
        <p id="397aba58-3415-4524-8492-57332de8fa19" class=""></p>
        <p id="c7cca689-c4e8-4572-a323-14f83c12edbd" class="">
          Link:
          <a
            href="https://github.com/rafliogun49/react_muhammad-rafli/tree/main/9_Clean%20Code/praktikum"
            >Github</a
          >
        </p>
        <p id="f862458e-26b2-41f4-9f7a-4cf48516ce25" class=""></p>
      </div>
    </article>
`,
  },
];

const textContainer = document.getElementById("pills-tabContent");

const content = () => {
  const allData = data.map((item) => {
    return `<div
      class="tab-pane fade show p-5 ${item.active && "active"}"
      id="pills-${item.name}"
      role="tabpanel"
      aria-labelledby="pills-${item.name}-tab"
    >${item.text}</div>`;
  });
  textContainer.innerHTML = allData;
};

window.addEventListener("load", content());
