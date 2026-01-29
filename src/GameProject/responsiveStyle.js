export function getScale(width) {
  if (width < 640)
    return {
      scale: {
        quiz1: [0.4, 1, 0.4],
        simon1: [0.6, 0.2, 0.2],
        fitness1: [0.4, 0.4, 1],
      },
      xMove: {
        quiz2: [-90, 150, 250],
        simon2: [0, 180, -190],
        fitness2: [90, -250, -140],
      },
      yMove: {
        quiz3: [-50, 170, 10],
        simon3: [30, 170, 160],
        fitness3: [-50, 0, 160],
      },
      opacity: {
        quiz4: [0, 1, 0],
        simon4: [1, 0, 0],
        fitness4: [0, 0, 1],
      },
    }; // quiz, simon, fitness
  if (width < 768)
    return {
      scale: {
        quiz1: [0.4, 1, 0.4],
        simon1: [0.6, 0.2, 0.2],
        fitness1: [0.4, 0.4, 1],
      },
      xMove: {
        quiz2: [-90, 150, 250],
        simon2: [0, 180, -190],
        fitness2: [90, -250, -130],
      },
      yMove: {
        quiz3: [-50, 150, 10],
        simon3: [0, 170, 160],
        fitness3: [-50, 0, 150],
      },
      opacity: {
        quiz4: [0, 1, 0],
        simon4: [1, 0, 0],
        fitness4: [0, 0, 1],
      },
    };
  if (width < 1024)
    //LG
    return {
      scale: {
        quiz1: [0.4, 1, 0.4],
        simon1: [0.6, 0.2, 0.2],
        fitness1: [0.4, 0.4, 1],
      },
      xMove: {
        quiz2: [-90, 185, 250],
        simon2: [0, 180, -190],
        fitness2: [90, -250, -180],
      },
      yMove: {
        quiz3: [-50, -40, 10],
        simon3: [0, 170, 160],
        fitness3: [-50, 0, -60],
      },
      opacity: {
        quiz4: [0.5, 1, 0.5],
        simon4: [1, 0.5, 0.5],
        fitness4: [0.5, 0.5, 1],
      },
    };
  if (width < 1280)
    //Done
    return {
      scale: {
        quiz1: [0.5, 1.2, 0.5],
        simon1: [0.6, 0.25, 0.25],
        fitness1: [0.5, 0.5, 1.2],
      },
      xMove: {
        quiz2: [-120, 230, 300],
        simon2: [0, 230, -240],
        fitness2: [120, -300, -220],
      },
      yMove: {
        quiz3: [-50, -50, 10],
        simon3: [0, 150, 140],
        fitness3: [-50, 0, -50],
      },
      opacity: {
        quiz4: [0.5, 1, 0.5],
        simon4: [1, 0.5, 0.5],
        fitness4: [0.5, 0.5, 1],
      },
    };
  if (width < 1536)
    //Done
    return {
      scale: {
        quiz1: [0.6, 1.4, 0.6],
        simon1: [0.8, 0.35, 0.35],
        fitness1: [0.6, 0.6, 1.4],
      },
      xMove: {
        quiz2: [-170, 265, 390],
        simon2: [0, 310, -320],
        fitness2: [170, -400, -265],
      },
      yMove: {
        quiz3: [-50, -10, 30],
        simon3: [0, 130, 130],
        fitness3: [-50, 0, -10],
      },
      opacity: {
        quiz4: [0.5, 1, 0.5],
        simon4: [1, 0.5, 0.5],
        fitness4: [0.5, 0.5, 1],
      },
    };
  return {
    //Done
    scale: {
      quiz1: [0.8, 1.6, 0.8],
      simon1: [1, 0.45, 0.45],
      fitness1: [0.8, 0.8, 1.6],
    },
    xMove: {
      quiz2: [-200, 300, 480],
      simon2: [0, 400, -400],
      fitness2: [210, -500, -300],
    },
    yMove: {
      quiz3: [-50, 30, 30],
      simon3: [0, 120, 100],
      fitness3: [-50, 20, 20],
    },
    opacity: {
      quiz4: [0.5, 1, 0.5],
      simon4: [1, 0.5, 0.5],
      fitness4: [0.5, 0.5, 1],
    },
  };
}

export function getScale1(width) {
  if (width < 640)
    return {
      scale: {
        comment1: [0.4, 1, 0.4],
        weather1: [0.6, 0.2, 0.2],
        movie1: [0.4, 0.4, 1],
      },
      xMove: {
        comment2: [-90, 150, 250],
        weather2: [0, 180, -190],
        movie2: [90, -250, -140],
      },
      yMove: {
        comment3: [-50, 170, 10],
        weather3: [30, 170, 160],
        movie3: [-50, 0, 160],
      },
      opacity: {
        comment4: [0, 1, 0],
        weather4: [1, 0, 0],
        movie4: [0, 0, 1],
      },
    };
  if (width < 768)
    return {
      scale: {
        comment1: [0.4, 1, 0.4],
        weather1: [0.6, 0.2, 0.2],
        movie1: [0.4, 0.4, 1],
      },
      xMove: {
        comment2: [-90, 150, 250],
        weather2: [0, 180, -190],
        movie2: [90, -250, -130],
      },
      yMove: {
        comment3: [-50, 150, 10],
        weather3: [0, 170, 160],
        movie3: [-50, 0, 150],
      },
      opacity: {
        comment4: [0, 1, 0],
        weather4: [1, 0, 0],
        movie4: [0, 0, 1],
      },
    };
  if (width < 1024)
    //LG
    return {
      scale: {
        comment1: [0.4, 1, 0.4],
        weather1: [0.6, 0.2, 0.2],
        movie1: [0.4, 0.4, 1],
      },
      xMove: {
        comment2: [-90, 185, 250],
        weather2: [0, 180, -190],
        movie2: [90, -250, -180],
      },
      yMove: {
        comment3: [-50, -40, 10],
        weather3: [0, 170, 160],
        movie3: [-50, 0, -60],
      },
      opacity: {
        comment4: [0.5, 1, 0.5],
        weather4: [1, 0.5, 0.5],
        movie4: [0.5, 0.5, 1],
      },
    };
  if (width < 1280)
    //Done
    return {
      scale: {
        comment1: [0.5, 1.2, 0.5],
        weather1: [0.8, 0.33, 0.33],
        movie1: [0.5, 0.5, 1.2],
      },
      xMove: {
        comment2: [-120, 230, 300],
        weather2: [0, 230, -240],
        movie2: [120, -300, -220],
      },
      yMove: {
        comment3: [-50, -50, 10],
        weather3: [0, 150, 140],
        movie3: [-50, 0, -50],
      },
      opacity: {
        comment4: [0.5, 1, 0.5],
        weather4: [1, 0.5, 0.5],
        movie4: [0.5, 0.5, 1],
      },
    };
  if (width < 1536)
    //Done
    return {
      scale: {
        comment1: [0.6, 1.4, 0.6],
        weather1: [1, 0.35, 0.35],
        movie1: [0.6, 0.6, 1.4],
      },
      xMove: {
        comment2: [-170, 265, 390],
        weather2: [0, 310, -320],
        movie2: [170, -400, -265],
      },
      yMove: {
        comment3: [-50, -10, 30],
        weather3: [0, 130, 130],
        movie3: [-50, 0, -10],
      },
      opacity: {
        comment4: [0.5, 1, 0.5],
        weather4: [1, 0.5, 0.5],
        movie4: [0.5, 0.5, 1],
      },
    };
  return {
    //Done
    scale: {
      comment1: [0.8, 1.6, 0.8],
      weather1: [1, 0.45, 0.45],
      movie1: [0.8, 0.8, 1.6],
    },
    xMove: {
      comment2: [-200, 300, 480],
      weather2: [0, 400, -400],
      movie2: [210, -500, -300],
    },
    yMove: {
      comment3: [-50, 30, 30],
      weather3: [0, 120, 100],
      movie3: [-50, 30, 20],
    },
    opacity: {
      comment4: [0.5, 1, 0.5],
      weather4: [1, 0.5, 0.5],
      movie4: [0.5, 0.5, 1],
    },
  };
}
