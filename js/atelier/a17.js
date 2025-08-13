document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.left-btn');
    const showContainer = document.querySelector('.show');
    const imageOverlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');

    // 为所有图片添加点击事件
    document.addEventListener('click', function(e) {
        const clickedImage = e.target.closest('img');
        if (clickedImage && !clickedImage.closest('.image-overlay')) {
            overlayImage.src = clickedImage.src;
            imageOverlay.classList.add('active');
        }
    });

    // 点击蒙版关闭
    imageOverlay.addEventListener('click', function() {
        imageOverlay.classList.remove('active');
    });

    // 预定义不同内容
    const contents = {
        '首页': `
                `,
        '角色': `
                
                            <!-- 角色内容 -->
                            <div class="character-content">
                                <div class="character-title" id="chara_top">
                                    角色 || CHARACTER
                                </div>
                                <div class="character-list flex">
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img01b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_01" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img01a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img02b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_02" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img02a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img03b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_03" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img03a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img04b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_04" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img04a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img05b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_05" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img05a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img06b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_06" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img06a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="character-list flex">
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img07b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_07" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img07a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img08b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_08" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img08a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img09b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_09" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img09a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img10b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_10" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img10a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img11b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_11" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img11a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img12b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_12" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img12a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="character-list flex">
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img13b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_13" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img13a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img14b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_14" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img14a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img15b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_15" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img15a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                    <div class="thum_middle flex">
                                        <div class="name">
                                            <img src="../../rs/atelier/a17/img/img16b.png">
                                        </div>
                                        <div class="charaimg">
                                            <a href="#chara_16" style="cursor: pointer;">
                                                <img src="../../rs/atelier/a17/img/img16a.jpg">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div id="chara_01" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Sophie Neuenmuller</p>
                                            <p class="cv">CV:相坂優歌</p>
                                        </div>
                                        <p class="name_zh_jp">苏菲•诺伊恩缪拉 || ソフイー•ノイエンミュラー</p>
                                        <div class="intro-1">年龄16岁 身高154cm 职业：炼金术士</div>
                                        <div class="intro-2">
                                            <p>本作主角。</p>
                                            <p>居住在基尔亨·贝尔郊区，经营炼金工房的少女。</p>
                                            <br>
                                            <p>性格开朗和善，能缓和周遭气氛。</p>
                                            <p>但不守时、做事粗心大意，常少根筋。</p>
                                            <br>
                                            <p>非常热爱炼金，在用于他人身上时，</p>
                                            <p>会感到莫大的喜悦。</p>
                                            <br>
                                            <p>对于炼金的好奇心及付出的努力，比一般人更多，</p>
                                            <p>基本上不做家事，特别是连打扫都给其他人负责。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/01.png"
                                        style="width:50%;transform: translateX(-17%);">
                                </div>
                                <div id="chara_02" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Plachta</p>
                                            <p class="cv">CV:井口裕香</p>
                                        </div>
                                        <p class="name_zh_jp">普拉芙妲 || プラフタ</p>
                                        <div class="intro-1">年龄？？岁 身高152cm 职业：图鉴</div>
                                        <div class="intro-2">
                                            <p>原为苏菲祖母留下，收藏在炼金工房书架上的古书。因为苏菲</p>
                                            <p>记入配方而觉醒，化身老师，用心指导苏菲许多相关的知识</p>
                                            <br>
                                            <p>因某件事为契机得以转化为人身，</p>
                                            <p>个性依然与书本形态时相同，会给予苏菲有关炼金术的建议</p>
                                            <br>
                                            <p>但关于炼金术之外的事情，都一无所知。以人类姿态</p>
                                            <p>走在城中时，常说出意涵不明的发言，使周围的人十分困扰</p>
                                            <br>
                                            <p>性格大致上很冷静，但偶尔会做出出人意表的大胆事情。</p>
                                            <p>恢复人类身份后，一直努力要想起自己遗忘的使命。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/02.png"
                                        style="width:45%;transform: translateX(-8%);">
                                </div>
                                <div id="chara_03" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Monika Ellmenreich</p>
                                            <p class="cv">CV:洲崎绫</p>
                                        </div>
                                        <p class="name_zh_jp">摩妮卡·艾门莱希 || モニカ・エルメンライヒ</p>
                                        <div class="intro-1">年龄17岁 身高163cm 职业：教会助手</div>
                                        <div class="intro-2">
                                            <p>苏菲的好友</p>
                                            <p>家世优良，热爱学习且擅长剑术，是个文武双全的才女。</p>
                                            <p>个性认真、注重礼节。</p>
                                            <br>
                                            <p>是苏菲的青梅竹马，平常虽然嘴巴上常会抱怨，</p>
                                            <p>却还是处处照顾着苏菲。</p>
                                            <br>
                                            <p>相当喜欢唱歌，经常私下偷偷练习。</p>
                                            <p>也常常到苏菲家吃点心，</p>
                                            <p>籍此机会帮忙清扫苏菲家里的环境。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/03.png"
                                        style="width:45%;transform: translateX(-15%);">
                                </div>
                                <div id="chara_04" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Oskar Behlmer</p>
                                            <p class="cv">CV:山下诚一郎</p>
                                        </div>
                                        <p class="name_zh_jp">奥斯卡·贝尔玛 || オサカ・ベルマ</p>
                                        <div class="intro-1">年龄16岁 身高165cm 职业：蔬果商</div>
                                        <div class="intro-2">
                                            <p>苏菲的好友，城里蔬果商的儿子。</p>
                                            <br>
                                            <p>不在乎细节，大而化之的乐天派个性。</p>
                                            <p>拥有能倾听植物话语的奇特能力，</p>
                                            <p>并有着有关花草的丰富知识。</p>
                                            <br>
                                            <p>奥斯卡本身非常喜爱植物，只要是有关植物的事，会立刻变得热情。</p>
                                            <p>非常不擅长运动，常常会有毫无来由的自信表现，</p>
                                            <p>但是一旦被否定就会开始陷入沮丧。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/04.png"
                                        style="width:35%;transform: translateX(7%);">
                                </div>
                                <div id="chara_05" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Corneria</p>
                                            <p class="cv">CV:近藤唯</p>
                                        </div>
                                        <p class="name_zh_jp">柯尔涅莉雅 || コルネリア</p>
                                        <div class="intro-1">年龄15岁 身高146cm 职业：量贩店店长</div>
                                        <div class="intro-2">
                                            <p>在基尔亨·贝尔开着量贩店的少女。</p>
                                            <br>
                                            <p>与苏菲同为炼金术士的她拥有复制物品的能力。</p>
                                            <p>但是，使用这个能力将会有缩短身高的代价，</p>
                                            <p>所以防止着能力的过度使用。</p>
                                            <br>
                                            <p>性格上是个我行我素，悠闲自在的人。</p>
                                            <p>为了找寻从记事起就不在了的父亲，</p>
                                            <p>以变得有名为目标，开了现在的量贩店</p>
                                            <br>
                                            <p>在战斗中，作为炼金术士的柯尔可以使用</p>
                                            <p>支援己方和阻碍魔物行动的辅助系道具。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/05.png"
                                        style="width:35%;transform: translateX(-5%);">
                                </div>
                                <div id="chara_06" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Harold Simens</p>
                                            <p class="cv">CV:新垣樽助</p>
                                        </div>
                                        <p class="name_zh_jp">哈罗尔·吉曼斯 || ハロル・ジーメンス</p>
                                        <div class="intro-1">年龄27岁 身高180cm 职业：钟表匠</div>
                                        <div class="intro-2">
                                            <p>街上的钟表匠</p>
                                            <p>虽然从退休的父亲手中接受了钟表店，但是工作并不上心。</p>
                                            <p>比起修理钟表，他更喜欢制作枪支来维持生计。</p>
                                            <br>
                                            <p>有着非常讽刺人的个性，说话处处带刺，</p>
                                            <p>其实内心很会照顾人，对从以前就认识的苏菲很在意。</p>
                                            <br>
                                            <p>在战斗中，正由于哈罗尔很会照顾人，从攻击到回复，</p>
                                            <p>所有的道具都可以熟练使用。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/06.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                                <div id="chara_07" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Horst Basler</p>
                                            <p class="cv">CV:上田耀司</p>
                                        </div>
                                        <p class="name_zh_jp">霍尔斯特·巴斯拉 || ホルスト・バスラー</p>
                                        <div class="intro-1">年龄51岁 身高175cm 职业：咖啡店店主</div>
                                        <div class="intro-2">
                                            <p>基尔亨·贝尔的咖啡店店长</p>
                                            <p>白天是个咖啡店，晚上则作为酒场经营</p>
                                            <br>
                                            <p>此外，他还精通街道信息，收受各种委托，</p>
                                            <p>给苏菲提供了各种各样的传言。</p>
                                            <br>
                                            <p>是个诚实厚实的人，深受街道人们的信赖。</p>
                                            <p>把孤零零的屋子作为给人们聚集的场合开成了如今的咖啡店。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/07.png"
                                        style="width:25%;transform: translateX(22%);">
                                </div>
                                <div id="chara_08" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Julio Sebald Leidenschaft</p>
                                            <p class="cv">CV:大河元气</p>
                                        </div>
                                        <p class="name_zh_jp">朱利欧·赛巴鲁特·雷汀夏弗特 || ジュリオ・セバルト・レーデンシャフト</p>
                                        <div class="intro-1">年龄19岁 身高177cm 职业：骑士</div>
                                        <div class="intro-2">
                                            <p>从邻国亚达莱特来的教会骑士团的青年。</p>
                                            <p>是个性格温柔、清爽、诚实的人。</p>
                                            <br>
                                            <p>为了某件事而调查炼金术，</p>
                                            <p>来到了苏菲的炼金工房</p>
                                            <br>
                                            <p>能够自由操控等身长的大剑，是个战力很强的人。</p>
                                            <br>
                                            <p>不过对于在战斗中使用道具就有些不擅长...?</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/08.png"
                                        style="width:40%;transform: translateX(12%);">
                                </div>
                                <div id="chara_09" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Fritz Weissberg</p>
                                            <p class="cv">CV:堀内贤雄</p>
                                        </div>
                                        <p class="name_zh_jp">弗里兹·怀斯贝尔克 || フリッツ·ワイスベルク</p>
                                        <div class="intro-1">年龄51岁 身高171cm 职业：人偶师</div>
                                        <div class="intro-2">
                                            <p>一边游历世界各地，一边表演木偶戏的木偶师。</p>
                                            <p>以前曾担任过佣兵，因此拥有卓越的剑术。</p>
                                            <br>
                                            <p>拥有丰富的旅行经验，陷入困境时也不会畏惧</p>
                                            <p>是个可以依靠的人物。</p>
                                            <br>
                                            <p>平时都是性格沉稳的年纪，但一旦谈到人偶的事情，</p>
                                            <p>就会表现出非常的性格，</p>
                                            <br>
                                            <p>在战斗中不太擅长使用道具。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/09.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                                <div id="chara_10" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Leon</p>
                                            <p class="cv">CV:饭冢雅弓</p>
                                        </div>
                                        <p class="name_zh_jp">阿美莉娅·蕾昂迈尔 || アメリヤ·レオンマイヤ</p>
                                        <div class="intro-1">年龄24岁 身高168cm 职业：裁缝师</div>
                                        <div class="intro-2">
                                            <p>游历至基尔亨·贝尔，自称是旅行裁缝师的女性。</p>
                                            <p>对于自己有事做的信心，很夸奖自己的裁缝技术。</p>
                                            <br>
                                            <p>实际上也如自己所言，技术超群，制作出来的服装都十分有魅力。</p>
                                            <br>
                                            <p>不擅长表达自己的感情，</p>
                                            <p>常常会表现出强势的态度。</p>
                                            <br>
                                            <p>战斗时会使用妨碍魔物的道具。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/10.png"
                                        style="width:25%;transform: translateX(12%);">
                                </div>
                                <div id="chara_11" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Meklet</p>
                                            <p class="cv">CV:松本幸</p>
                                        </div>
                                        <p class="name_zh_jp">梅库雷特 || メクレット</p>
                                        <div class="intro-1">年龄？？岁 身高140cm 职业：旅行人</div>
                                        <div class="intro-2">
                                            <p>每次有事都会出现在苏菲面前的少年，</p>
                                            <p>常常与亚托米娜一起行动</p>
                                            <br>
                                            <p>好像在调查炼金术，经常找苏菲，</p>
                                            <p>但是其目的不明</p>
                                            <br>
                                            <p>猛然一见是小孩子的说话方式，</p>
                                            <p>但有时又意外地能直指事情的核心</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/11.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                                <div id="chara_12" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Atomina</p>
                                            <p class="cv">CV:木野日菜</p>
                                        </div>
                                        <p class="name_zh_jp">亚托米娜 || アトミナ</p>
                                        <div class="intro-1">年龄？？岁 身高139cm 职业：旅行人</div>
                                        <div class="intro-2">
                                            <p>每次有事总是会出现在苏菲面前的少女，</p>
                                            <p>常常与梅库雷特一起行动</p>
                                            <br>
                                            <p>好像在调查炼金术，经常找苏菲，</p>
                                            <p>但是其目的不明</p>
                                            <br>
                                            <p>性格比梅库雷特成熟，感情不太容易起伏</p>
                                            <br>
                                            <p>但有时会露出与年龄相符的天真笑容</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/12.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                                <div id="chara_13" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Tess Heitzmann</p>
                                            <p class="cv">CV:仲谷明香</p>
                                        </div>
                                        <p class="name_zh_jp">缇丝·海兹曼 || テス·ハイツマン</p>
                                        <div class="intro-1">年龄18岁 身高155cm 职业：咖啡店员</div>
                                        <div class="intro-2">
                                            <p>只在特定日子里工作的咖啡店招牌女孩。</p>
                                            <p>身为众多兄弟中的长女，为养家而外出工作。</p>
                                            <br>
                                            <p>开朗天真，其实非常勤劳。</p>
                                            <br>
                                            <p>性格开朗，但做事不考虑后果，常引发问题，</p>
                                            <p>是一个令人头痛的问题制造者。</p>
                                            <br>
                                            <p>将来的梦想是赚大钱，跟家人一起开店。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/13.png"
                                        style="width:20%;transform: translateX(12%);">
                                </div>
                                <div id="chara_14" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Pamela Ibis</p>
                                            <p class="cv">CV:谷井明日香</p>
                                        </div>
                                        <p class="name_zh_jp">帕梅拉·伊比斯 || パメラ・イービス</p>
                                        <div class="intro-1">年龄??岁 身高158cm 职业：修女</div>
                                        <div class="intro-2">
                                            <p>教会的修女。</p>
                                            <p>温文尔雅，性格温和。</p>
                                            <p>经常用拖长了的语调说话，无意识地缓和周围的气氛。</p>
                                            <br>
                                            <p>除了独自处理教会的工作外，还开设了托儿所</p>
                                            <p>来照顾街上的孩子们，是个能干的人。</p>
                                            <br>
                                            <p>对待街上的老人也像对待孩子一样，她的年龄是个谜。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/14.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                                <div id="chara_15" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Elise Phulie</p>
                                            <p class="cv">CV:大坪由佳</p>
                                        </div>
                                        <p class="name_zh_jp">爱莉婕·弗利 || エリーゼ·フューリー</p>
                                        <div class="intro-1">年龄17岁 身高160cm 职业：书店</div>
                                        <div class="intro-2">
                                            <p>经营着从祖父那里继承来的书店。</p>
                                            <br>
                                            <p>部分类别的书本爱好者，自幼是个书虫。</p>
                                            <p>被苏菲称作"爱莉婕姐姐"，</p>
                                            <p>知识渊博的她，是苏菲的良师益友。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/15.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                                <div id="chara_16" class="chara flex-center">
                                    <div class="introduce flex-center flex-s" style="transform: translateX(17%);">
                                        <div class="name_show flex-space-between-h">
                                            <p class="name_en">Logix Ficario</p>
                                            <p class="cv">CV:石川界人</p>
                                        </div>
                                        <p class="name_zh_jp">罗吉库斯·菲克萨立欧 || ロジックス·フィクサリオ</p>
                                        <div class="intro-1">年龄??岁 身高??cm 职业：锻冶屋</div>
                                        <div class="intro-2">
                                            <p>在街上经营锻冶屋的青年。</p>
                                            <p>非常喜欢四处旅游，为精进锻冶工匠的手艺而环游世界中。</p>
                                            <br>
                                            <p>认真直率的个性，技巧也不错，</p>
                                            <p>因此锻冶屋的生意也十分繁盛。</p>
                                            <br>
                                            <p>希望带着自己制作的武器的使用者，能带着它们周游世界。</p>
                                        </div>
                                    </div>
                                    <img src="../../rs/atelier/a17/img/16.png"
                                        style="width:35%;transform: translateX(12%);">
                                </div>
                            </div>
                `,
        '素材': `
                `,
        '事件': `
                `,
        '其他': `
                `
    };

    // 添加点击事件
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // 移除所有按钮的active类
            buttons.forEach(btn => btn.classList.remove('active'));
            // 为当前按钮添加active类
            this.classList.add('active');

            // 获取按钮文本内容
            const buttonText = this.textContent.trim();

            // 显示对应内容
            showContainer.innerHTML = contents[buttonText];
        });
    });
});