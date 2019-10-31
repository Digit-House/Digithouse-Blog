Understanding Flexbox: Everything you need to know

flexbox ကုိ စတင္ေလ့လာတာဟာ ေပ်ာ္ရႊင္ဖုိ့ေကာင္းမယ္မထင္ပါဖူး

flexbox ဟာ css နဲ႔ေရာ bootstrap နဲ႔ပါ  တြဲသုံးလုိ႔ရပါတယ္။
 
flexbox မွာ အသုံးျပဳလို႔ရတဲ  comment ေတြကုိ တခု ခ်င္းစီ နဲ႔ ဘယ္လုိ သုံးလဲဆုိတာကုိရွင္းျပသြားမွာျဖစ္ပါတယ္

ပုံမွန္ ဆုိရင္ css မွာ ေနရာတခုေရာက္ေအာင္ ေရြ႕ဖုိဆုိရင္ ေတာ္ေတာ္ခက္ပါတယ္။ ဒါေပမဲ့ FLEXBOX  ကုိသုံးလုိက္ရင္ အလြယ္ တကူ ေရြကလုိ

ရပါတယ္။

## Images
(https://cdn-media-1.freecodecamp.org/images/GwQfjHhv1ZtEpMG1PBsmEmOk94a0OX1MNsTu)

display:block;  နဲ့  display:flex; ရဲ႕ကြာျခားခ်က္ ကုိ ေအာက္က ပုံမွာၾကည္လုိရပါတယ္

## Images
https://cdn-media-1.freecodecamp.org/images/ChnkgUaWEN6dmtS4EQCG60uqIjZVphsErq91

https://cdn-media-1.freecodecamp.org/images/6WwoIEc45lUHUcFQCmD8GmziiISm2lO64Y1-


flexbox ကုိ အသုံးမျပဳခင္ အ ေျခခံ အ ေန နဲ့  flexbox ဟာ parent ျဖစ္တဲ့ div.container ထဲ မွာရွိတဲ child content ေတြ စာေတြ ပုံ ေတြကုိ

သူ့ ႕ အစုလုိက္ အစုလုိက္ ကုိ လုိခ်င္တဲ့ ေနရာ ကုိ ေရာက္ေအာင္ ထားဖုိ့ အသုံး ျပဳတာပါ။

flexbox ရဲ႕ comment ကုိ အသုံးျပဳခ်င္ရင္ ေအာက္မွာ ေပးထားတဲ့ code ကုိ အရင္ေခၚရပါမယ္

```
 display: flex;
```
အရင္ ဆုံးအေနနဲ့  ''justify-content''  အေၾကာင္းေျပာပါမယ္ သူမွာ
flex-start | flex-end | center | space-between | space-around. ဆုိျပီးသုံးလုိ ရပါတယ္
ပုံမွာျပထားတဲအတုိင္းcontent တခုခ်င္းကုိ အသုံးျပဳလုိရပါတယ္

## Images
https://cdn-media-1.freecodecamp.org/images/OBGVr-DdHiQ2y9VOWuhXqXeGnFnyDSBTx7hv

ေနာက္တခုအေနနဲ႕
Flex Align Items ကုိ ရွင္းျပပါမယ္ သူမွာသုံးလုိ႕ရတာေတြက flex-start | flex-end | center | baseline | stretch ဆုိျပီး ရွိပါတယ္
အလုပ္လုပ္ပုံကုိ ေအာက္မွာရွင္းျပထားပါတယ္။
## Images
https://cdn-media-1.freecodecamp.org/images/UgsULw0Kk49l-l1wSzeurYNJKCmcA-01oE8a

ေနာက္တခုအေနနဲ႕
Flex Direction ကုိ ရွင္းျပပါမယ္ သူမွာသုံးလုိ႕ရတာေတြက row | column | row-reverse | column-reverse ဆုိျပီး ရွိပါတယ္
အလုပ္လုပ္ပုံကုိ ေအာက္မွာရွင္းျပထားပါတယ္။

## Images

https://cdn-media-1.freecodecamp.org/images/wEg7wdKEfv9-bqaiB-t9hzOapBPiqZVYNFIh3
https://cdn-media-1.freecodecamp.org/images/zYdQGSmhtMyqcAbEUDoEehohC8E-gtgvQx6b


ႏွစ္ခုေပါင္းျပီးအေနနဲ့ 

## Images

https://cdn-media-1.freecodecamp.org/images/u9tCV-zRt3qpgSyNQt53e-eRz0-HIrsqqOk-


နမူနာ အေန နဲ့ 

```
.parent {
    display: flex;
    align-items: center;
}
```
