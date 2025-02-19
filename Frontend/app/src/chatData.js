const chatData = [
    {
      name: "Thabo",
      profileLink: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/356224004_2445998272238740_7189299053377285219_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGAmHcoCsnNdHE6y7f5KyOMtj5RPRTcnyS2PlE9FNyfJCFEadr1DUcIIn_C37DMWM-DdPaeNFgsRUsdAgV5yU01&_nc_ohc=GQnov-gUAKsQ7kNvgHGEb5D&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AbUSRoc4BF93CqAsKN_sZq1&oh=00_AYAaruTpt4_6CZueNefXEGwaAX1Xde7DCCpKBRARx5uKPQ&oe=6707BE12",
      message: "Hey, just finished fixing the sink. Let me know if you need anything else.",
      timeSent: "2 hours ago",
      receiptStatus: "seen",
    },
    {
      name: "Naledi",
      profileLink: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/365864442_193254333740048_8993341101674308808_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGxlFMiIEoNT0fgzaEvyapi_W0oYJdlWGz9bShgl2VYbNFPfwKetnuHS171FL1Wm5iX-2kAMTRJa-PxDiB4vLD8&_nc_ohc=eQzbYPdbNBIQ7kNvgFGR_f8&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AqOPTkOCDPYUgzbv1GRNhHz&oh=00_AYAuoo5KMdsrePm2Kv5Ibd510Ijj0ZhkWV7Iw8VWTjX1SQ&oe=6707DE03",
      message: "I’ll be there tomorrow at 10 AM to start the garden work.",
      timeSent: "1 day ago",
      receiptStatus: "sent",
    },
    {
      name: "Sipho",
      profileLink: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/361923775_1719989565097879_6464165592243650388_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFnwWmQU3DNajaK4HiyI4uuJVsqrYX8oLMlWyqthfygswHO85Yk56N6jP-kwkXuwFalC4yPVOWxWFuzmDV9Bwia&_nc_ohc=izPNheWfhdsQ7kNvgF2bCrH&_nc_ht=scontent-jnb2-1.xx&_nc_gid=ALoxN2ILGJP4HW04iFlGMZ6&oh=00_AYCyWQVdtXXoQtD8OVyJb3SHecZYUUtCUjedS-yIoYCjrQ&oe=6707DCFE",
      message: "Can you send me your address so I can confirm the location?",
      timeSent: "3 days ago",
      receiptStatus: "1",
    },
    {
      name: "Busi",
      profileLink: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/460922883_1070651577784434_3220347537439472506_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeE2wHeCUNqoctR59bfn0poSXGvmZzxZ4OBca-ZnPFng4IiQD-54qhsI3xFr0IxiUl55j5jZsnhYthcaZfwVlC3a&_nc_ohc=9ozIfUD4xZsQ7kNvgF8DY5A&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AiWiczRxVxv0UjzQxBtVmrV&oh=00_AYCzHJ_Cq_CUhILjRxjxZLLaIHc7POuKdYHEnlRO3Wo_Zg&oe=6707DFD2",
      message: "Great job on the electrical work! Everything is working perfectly.",
      timeSent: "5 days ago",
      receiptStatus: "seen",
    },
    {
      name: "Mampho",
      profileLink: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/425471356_122096694302208323_7136009874433240528_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeENX13RNHaJE8WBP-00_ijRBoiak4EpKaMGiJqTgSkpo-t0LGItA9qV29gEnJAreY9MOIIdQePG9BH3otNyZoog&_nc_ohc=iqOLHRA_H1MQ7kNvgFQ59nQ&_nc_ht=scontent-jnb2-1.xx&_nc_gid=AT1tCZV2_1uYop1LkMuQya1&oh=00_AYA-gMB_xCe26UZ1Pl5AHXrlyJVl3PdghrGhCAj4TPSWmg&oe=6707ACEC",
      message: "Can you give me a quote for the painting?",
      timeSent: "1 week ago",
      receiptStatus: "sent",
    },
    {
      name: "Sibusiso",
      profileLink: "https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/437045279_738344521816452_1993915407261530778_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGkvS28q7QlSoirpW7D-2HyRxWTMVMaYT5HFZMxUxphPs6m8O9Otz7KX5gYLS3WH9pZGdnRD1W4GKDrNMZK998c&_nc_ohc=X9s3JSDDqTUQ7kNvgG7na10&_nc_ht=scontent-jnb2-1.xx&_nc_gid=Am7UDJp20dipBZbI98Xkx_K&oh=00_AYA5OIV-8Aa7hMpg1epN6PmlUWCO0gQxstG_OoQGFcK-yA&oe=6707D468",
      message: "I’m on my way. See you in 30 minutes.",
      timeSent: "3 hours ago",
      receiptStatus: "seen",
    },
];
  export default chatData