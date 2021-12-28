appId="sdk_tpojgec22_4c07486169"
InboxSDK.load(2, appId).then((sdk) => {
    sdk.Compose.registerComposeViewHandler((composeView) => {
      composeView.addButton({
        title: "Cold Rush",
        iconUrl:
          "",
        onClick(event) {
          event.composeView.insertTextIntoBodyAtCursor("Dear  Sir / Ma'am,\nGreetings from JGEC !!\nOn behalf of Jalpaiguri Government Engineering College, we are highly pleased to have the honor of cordially inviting your esteemed Organisation/firm to participate in our campus recruitment drive this year.\n\nWith a stellar legacy of 60 years, our institute has been a hub of knowledge creation that prioritizes the frontier areas of national and global importance and producing many illustrious alumni, contributing to the national and international firms at an unparalleled level, since 1961.\n\nSalient features of JGEC :\n* Accredited by National Assessment and Accreditation Council (NAAC) and National Board of Accreditation (NBA).\n* Approved by All India Council of Technical Education (AICTE).\n\nOur institution offers 6 courses i.e Computer Science Engineering, Information Technology, Electronics & Communication Engineering, Electrical Engineering, Mechanical Engineering, and Civil Engineering in B.Tech and 2 departments in M.Tech with more than 1500 meritorious students.\n\nDespite the chosen discipline, we spare no efforts in grooming our students to broaden their mindsets and create positive attitudes thus equipping them with all qualities to make them an asset to whichever institute/organization they may join.\n\nIt will be extremely delightful for us in extending an invitation to you to visit our institute and participate in the campus recruitment drive for the 2021-2022 batch. We will be highly privileged if you would provide an opportunity to our students for campus placements.\n\n\nDetails of the institution are available in the Placement Brochure via the following drive link: JGEC Placement Brochure 2021 - 2022\n\nFeel free to contact the undersigned for any queries. Looking forward to hearing from you.\nThanks & Best Regards,\n");
        },
      });
    });
  });