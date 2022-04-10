module.exports = {
  content: [ "./public/*.html"],
  theme: {
    extend: {
      fontFamily: { 
        font_1 : ['Overpass'],
        font_2: ['Ubuntu']
      },
      
    colors: { 
      White:'#FFFFFF',
      myred: { 
        100: '#FF7A85',
        200: '#FF525D' 
      },
      grayblue: { 
        100:' #C8C8CB',
        200: '#4B5862'  
      },
      darkblue: { 
        200: '#25252D'
      },
      gradientred: { 
        200: '#FF8F70',
        100: '#FF3D54',
      },
      gradientblue: { 
        100: '#2C2D3F',
      },

    }
    },
  },
  plugins: [],
}
